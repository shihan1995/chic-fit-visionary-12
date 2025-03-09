
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your fashion assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // In a real app, this would be a call to your agent_chat.py API
      // Simulating API call with setTimeout
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: generateResponse(input),
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error getting response:', error);
      setIsLoading(false);
    }
  };

  // Simple response generator - this would be replaced by your agent_chat.py API
  const generateResponse = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    
    if (lowercaseQuery.includes('size') || lowercaseQuery.includes('fit')) {
      return "For accurate size recommendations, I'd suggest taking the style quiz! It will help us determine your perfect fit across different brands.";
    }
    
    if (lowercaseQuery.includes('style') || lowercaseQuery.includes('look')) {
      return "Based on the latest trends, I'd recommend exploring our minimalist or classic collections. Would you like me to suggest some specific items?";
    }
    
    if (lowercaseQuery.includes('color') || lowercaseQuery.includes('colour')) {
      return "Color choices depend on your skin tone and personal preferences. Our color analysis tool can help identify the most flattering colors for you.";
    }
    
    return "I'd be happy to help with your fashion questions! Could you provide more details about what you're looking for?";
  };

  return (
    <>
      {/* Chat bubble button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-fashion-neutral-900 text-white rounded-full p-4 shadow-lg hover:bg-fashion-neutral-800 transition-all z-50"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div 
          className={cn(
            "fixed right-4 bg-white rounded-lg shadow-xl border border-fashion-neutral-200 transition-all duration-300 z-50",
            isMinimized 
              ? "bottom-4 w-72 h-12" 
              : "bottom-4 w-80 sm:w-96 h-[500px] max-h-[80vh]"
          )}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between p-3 border-b border-fashion-neutral-200 bg-fashion-neutral-50 rounded-t-lg">
            <div className="flex items-center">
              <MessageSquare size={18} className="text-fashion-neutral-900 mr-2" />
              <h3 className="font-medium text-fashion-neutral-900">Fashion Assistant</h3>
            </div>
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-fashion-neutral-100 rounded"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-fashion-neutral-100 rounded"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>
          
          {/* Chat messages */}
          {!isMinimized && (
            <>
              <div className="p-3 h-[400px] overflow-y-auto flex flex-col">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={cn(
                      "max-w-[80%] mb-3 p-3 rounded-lg",
                      message.role === 'user' 
                        ? "bg-fashion-primary-light ml-auto rounded-tr-none" 
                        : "bg-fashion-neutral-100 mr-auto rounded-tl-none"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs text-fashion-neutral-500 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))}
                {isLoading && (
                  <div className="bg-fashion-neutral-100 self-start max-w-[80%] mb-3 p-3 rounded-lg rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-fashion-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-fashion-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-fashion-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Chat input */}
              <form 
                className="p-3 border-t border-fashion-neutral-200 flex items-center"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow px-3 py-2 border border-fashion-neutral-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-fashion-neutral-900"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="bg-fashion-neutral-900 text-white px-3 py-2 rounded-r-md hover:bg-fashion-neutral-800 transition-colors"
                  disabled={!input.trim() || isLoading}
                >
                  <Send size={18} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
