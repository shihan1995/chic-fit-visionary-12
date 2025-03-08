import React, { useState } from 'react';
import { Camera, Upload, Ruler, Palette, User, Wand2, ExternalLink } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface ClothingItem {
  id: string;
  name: string;
  image: string;
  type: string;
  gender: 'male' | 'female' | 'unisex';
  retailer: string;
  price: string;
  link: string;
}

const VisualTryOn = () => {
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | 'unisex'>('unisex');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  const avatars = [
    {
      id: 'male1',
      gender: 'male',
      image: 'https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200'
    },
    {
      id: 'male2',
      gender: 'male',
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200'
    },
    {
      id: 'female1',
      gender: 'female',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200'
    },
    {
      id: 'female2',
      gender: 'female',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200'
    },
    {
      id: 'unisex1',
      gender: 'unisex',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200'
    },
    {
      id: 'unisex2',
      gender: 'unisex',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200'
    }
  ];
  
  const clothingItems: ClothingItem[] = [
    {
      id: 'top1',
      name: 'Organic Cotton T-Shirt',
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'top',
      gender: 'unisex',
      retailer: 'Everlane',
      price: '$28',
      link: 'https://www.everlane.com'
    },
    {
      id: 'top2',
      name: 'Oxford Button-Down Shirt',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'top',
      gender: 'male',
      retailer: 'J.Crew',
      price: '$79.50',
      link: 'https://www.jcrew.com'
    },
    {
      id: 'top3',
      name: 'Silk Blouse',
      image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'top',
      gender: 'female',
      retailer: 'Reformation',
      price: '$148',
      link: 'https://www.thereformation.com'
    },
    {
      id: 'top4',
      name: 'Merino Wool Sweater',
      image: 'https://images.unsplash.com/photo-1624278094833-55146211d279?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'top',
      gender: 'unisex',
      retailer: 'Uniqlo',
      price: '$39.90',
      link: 'https://www.uniqlo.com'
    },
    {
      id: 'top5',
      name: 'Cashmere Turtleneck',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'top',
      gender: 'female',
      retailer: 'Nordstrom',
      price: '$129',
      link: 'https://www.nordstrom.com'
    },
    {
      id: 'top6',
      name: 'Linen Henley Shirt',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'top',
      gender: 'male',
      retailer: 'Buck Mason',
      price: '$85',
      link: 'https://www.buckmason.com'
    },
    {
      id: 'bottom1',
      name: 'Slim Stretch Jeans',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'bottom',
      gender: 'unisex',
      retailer: 'Levi\'s',
      price: '$98',
      link: 'https://www.levi.com'
    },
    {
      id: 'bottom2',
      name: 'Stretch Chino Pants',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'bottom',
      gender: 'male',
      retailer: 'Bonobos',
      price: '$98',
      link: 'https://bonobos.com'
    },
    {
      id: 'bottom3',
      name: 'Pleated Mini Skirt',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'bottom',
      gender: 'female',
      retailer: 'Madewell',
      price: '$78',
      link: 'https://www.madewell.com'
    },
    {
      id: 'bottom4',
      name: 'Wide-Leg Wool Trousers',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'bottom',
      gender: 'female',
      retailer: 'COS',
      price: '$135',
      link: 'https://www.cos.com'
    },
    {
      id: 'bottom5',
      name: 'Selvedge Denim Jeans',
      image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'bottom',
      gender: 'male',
      retailer: 'A.P.C.',
      price: '$220',
      link: 'https://www.apc-us.com'
    },
    {
      id: 'bottom6',
      name: 'Athletic Joggers',
      image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'bottom',
      gender: 'unisex',
      retailer: 'Lululemon',
      price: '$128',
      link: 'https://shop.lululemon.com'
    },
    {
      id: 'outer1',
      name: 'Leather Biker Jacket',
      image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'outer',
      gender: 'unisex',
      retailer: 'AllSaints',
      price: '$429',
      link: 'https://www.allsaints.com'
    },
    {
      id: 'outer2',
      name: 'Ludlow Suit Jacket',
      image: 'https://images.unsplash.com/photo-1555069519-127aadedf1ee?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'outer',
      gender: 'male',
      retailer: 'J.Crew',
      price: '$425',
      link: 'https://www.jcrew.com'
    },
    {
      id: 'outer3',
      name: 'Cashmere Cardigan',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'outer',
      gender: 'female',
      retailer: 'Naadam',
      price: '$195',
      link: 'https://naadam.co'
    },
    {
      id: 'outer4',
      name: 'Waxed Canvas Jacket',
      image: 'https://images.unsplash.com/photo-1591047139638-b4c4991d8d69?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'outer',
      gender: 'male',
      retailer: 'Filson',
      price: '$295',
      link: 'https://www.filson.com'
    },
    {
      id: 'outer5',
      name: 'Oversized Wool Coat',
      image: 'https://images.unsplash.com/photo-1608234807905-4466023792f5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'outer',
      gender: 'female',
      retailer: 'Aritzia',
      price: '$328',
      link: 'https://www.aritzia.com'
    },
    {
      id: 'outer6',
      name: 'Quilted Down Vest',
      image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150&h=200',
      type: 'outer',
      gender: 'unisex',
      retailer: 'Patagonia',
      price: '$179',
      link: 'https://www.patagonia.com'
    }
  ];
  
  const filteredClothingItems = clothingItems.filter(
    item => item.gender === selectedGender || item.gender === 'unisex'
  );
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setSelectedAvatar(null);
    }
  };
  
  const handleSelectAvatar = (avatarId: string) => {
    const avatar = avatars.find(a => a.id === avatarId);
    if (avatar) {
      setSelectedAvatar(avatar.image);
      setUploadedImage(null);
    }
  };
  
  const toggleClothingItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };
  
  const handleGenderChange = (gender: 'male' | 'female' | 'unisex') => {
    setSelectedGender(gender);
    setSelectedItems([]);
  };
  
  const selectedImage = uploadedImage || selectedAvatar;
  
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-fashion-neutral-900 mb-4">
          Virtual Try-On Experience
        </h2>
        <p className="text-lg text-fashion-neutral-600 max-w-2xl mx-auto">
          Upload your photo or choose an avatar to see how clothes from top brands would look on you
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-fashion-neutral-200 p-6">
            <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-4">Choose Your Model</h3>
            
            <Tabs defaultValue="upload" className="w-full mb-6">
              <TabsList className="w-full grid grid-cols-2 mb-4">
                <TabsTrigger value="upload" className="flex items-center justify-center">
                  <Camera size={16} className="mr-2" />
                  Upload Photo
                </TabsTrigger>
                <TabsTrigger value="avatar" className="flex items-center justify-center">
                  <User size={16} className="mr-2" />
                  Use Avatar
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload" className="mt-0">
                <div 
                  className={cn(
                    "border-2 border-dashed rounded-lg p-4 text-center mb-4 cursor-pointer hover:bg-fashion-neutral-50 transition-colors",
                    uploadedImage ? "border-fashion-neutral-400" : "border-fashion-neutral-200"
                  )}
                  onClick={() => document.getElementById('photo-upload')?.click()}
                >
                  {uploadedImage ? (
                    <div className="w-full aspect-[3/4] max-w-xs mx-auto">
                      <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover rounded-lg" />
                    </div>
                  ) : (
                    <div className="py-8">
                      <Upload size={40} className="mx-auto mb-2 text-fashion-neutral-400" />
                      <p className="text-fashion-neutral-600">
                        Click to upload your photo
                      </p>
                      <p className="text-fashion-neutral-400 text-sm mt-1">
                        Supports JPG, PNG (max 5MB)
                      </p>
                    </div>
                  )}
                  <input 
                    id="photo-upload" 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageUpload}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="avatar" className="mt-0">
                <div className="mb-4">
                  <div className="flex justify-between mb-4">
                    <button 
                      className={cn(
                        "px-3 py-1 text-sm rounded-full transition-colors",
                        selectedGender === 'male' ? "bg-fashion-neutral-900 text-white" : "bg-fashion-neutral-100"
                      )}
                      onClick={() => handleGenderChange('male')}
                    >
                      Male
                    </button>
                    <button 
                      className={cn(
                        "px-3 py-1 text-sm rounded-full transition-colors",
                        selectedGender === 'female' ? "bg-fashion-neutral-900 text-white" : "bg-fashion-neutral-100"
                      )}
                      onClick={() => handleGenderChange('female')}
                    >
                      Female
                    </button>
                    <button 
                      className={cn(
                        "px-3 py-1 text-sm rounded-full transition-colors",
                        selectedGender === 'unisex' ? "bg-fashion-neutral-900 text-white" : "bg-fashion-neutral-100"
                      )}
                      onClick={() => handleGenderChange('unisex')}
                    >
                      Neutral
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {avatars
                      .filter(avatar => avatar.gender === selectedGender || avatar.gender === 'unisex')
                      .map(avatar => (
                        <div 
                          key={avatar.id} 
                          className={cn(
                            "border-2 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all aspect-[3/4]",
                            selectedAvatar === avatar.image ? "border-fashion-neutral-900 shadow-sm" : "border-fashion-neutral-200"
                          )}
                          onClick={() => handleSelectAvatar(avatar.id)}
                        >
                          <img 
                            src={avatar.image} 
                            alt={`Avatar ${avatar.id}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Ruler size={18} className="text-fashion-neutral-600" />
                <h4 className="text-fashion-neutral-800 font-medium">Size Guide</h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="border rounded-lg p-3 bg-fashion-neutral-50">
                  <p className="text-xs text-fashion-neutral-600 mb-1">Top Size</p>
                  <p className="font-medium">Medium</p>
                </div>
                <div className="border rounded-lg p-3 bg-fashion-neutral-50">
                  <p className="text-xs text-fashion-neutral-600 mb-1">Bottom Size</p>
                  <p className="font-medium">32</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Palette size={18} className="text-fashion-neutral-600" />
                <h4 className="text-fashion-neutral-800 font-medium">Best Colors</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['#112233', '#663399', '#6495ED', '#2E8B57', '#F5F5DC'].map((color, index) => (
                  <div 
                    key={index}
                    className="w-8 h-8 rounded-full border"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 flex flex-col">
          <div className="bg-white rounded-xl shadow-sm border border-fashion-neutral-200 p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-4">Preview</h3>
            
            <div className="flex-grow flex items-center justify-center">
              {selectedImage ? (
                <div className="relative w-full max-w-xs mx-auto aspect-[3/4]">
                  <img 
                    src={selectedImage} 
                    alt="Model" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {selectedItems.map(itemId => {
                    const item = clothingItems.find(i => i.id === itemId);
                    if (!item) return null;
                    
                    return (
                      <div 
                        key={item.id}
                        className="absolute inset-0 rounded-lg overflow-hidden"
                        style={{ opacity: 0.7 }}
                      >
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center p-8 text-fashion-neutral-400">
                  <User size={64} className="mx-auto mb-4" />
                  <p>Upload a photo or select an avatar to start</p>
                </div>
              )}
            </div>
            
            <div className="mt-4">
              <AnimatedButton 
                variant="primary"
                icon={<Wand2 size={16} />}
                disabled={!selectedImage}
                className="w-full"
              >
                Generate Complete Look
              </AnimatedButton>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-fashion-neutral-200 p-6">
            <h3 className="text-xl font-semibold text-fashion-neutral-900 mb-4">Choose Clothing</h3>
            
            <Tabs defaultValue="tops" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-4">
                <TabsTrigger value="tops">Tops</TabsTrigger>
                <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
                <TabsTrigger value="outerwear">Outerwear</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tops" className="mt-0">
                <div className="grid grid-cols-2 gap-3">
                  {filteredClothingItems
                    .filter(item => item.type === 'top')
                    .map(item => (
                      <div 
                        key={item.id}
                        className={cn(
                          "border rounded-lg overflow-hidden cursor-pointer transition-all",
                          selectedItems.includes(item.id) 
                            ? "border-fashion-neutral-900 shadow-sm" 
                            : "border-fashion-neutral-200 hover:border-fashion-neutral-300"
                        )}
                        onClick={() => toggleClothingItem(item.id)}
                      >
                        <div className="aspect-[3/4]">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-xs text-fashion-neutral-500">{item.retailer}</p>
                            <p className="text-xs font-medium">{item.price}</p>
                          </div>
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-2 text-xs flex items-center text-fashion-primary hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={10} className="mr-1" />
                            View on site
                          </a>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </TabsContent>
              
              <TabsContent value="bottoms" className="mt-0">
                <div className="grid grid-cols-2 gap-3">
                  {filteredClothingItems
                    .filter(item => item.type === 'bottom')
                    .map(item => (
                      <div 
                        key={item.id}
                        className={cn(
                          "border rounded-lg overflow-hidden cursor-pointer transition-all",
                          selectedItems.includes(item.id) 
                            ? "border-fashion-neutral-900 shadow-sm" 
                            : "border-fashion-neutral-200 hover:border-fashion-neutral-300"
                        )}
                        onClick={() => toggleClothingItem(item.id)}
                      >
                        <div className="aspect-[3/4]">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-xs text-fashion-neutral-500">{item.retailer}</p>
                            <p className="text-xs font-medium">{item.price}</p>
                          </div>
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-2 text-xs flex items-center text-fashion-primary hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={10} className="mr-1" />
                            View on site
                          </a>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </TabsContent>
              
              <TabsContent value="outerwear" className="mt-0">
                <div className="grid grid-cols-2 gap-3">
                  {filteredClothingItems
                    .filter(item => item.type === 'outer')
                    .map(item => (
                      <div 
                        key={item.id}
                        className={cn(
                          "border rounded-lg overflow-hidden cursor-pointer transition-all",
                          selectedItems.includes(item.id) 
                            ? "border-fashion-neutral-900 shadow-sm" 
                            : "border-fashion-neutral-200 hover:border-fashion-neutral-300"
                        )}
                        onClick={() => toggleClothingItem(item.id)}
                      >
                        <div className="aspect-[3/4]">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-xs text-fashion-neutral-500">{item.retailer}</p>
                            <p className="text-xs font-medium">{item.price}</p>
                          </div>
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-2 text-xs flex items-center text-fashion-primary hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={10} className="mr-1" />
                            View on site
                          </a>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualTryOn;
