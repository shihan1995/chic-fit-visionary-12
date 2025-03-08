
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-16 max-w-xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-fashion-neutral-100 rounded-full mb-6">
            <span className="text-4xl font-semibold text-fashion-neutral-800">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-fashion-neutral-900 mb-4">Page Not Found</h1>
          <p className="text-fashion-neutral-600 text-lg mb-8">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Link to="/">
            <AnimatedButton 
              variant="primary" 
              icon={<ArrowLeft size={18} />}
              iconPosition="left"
            >
              Return to Home
            </AnimatedButton>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
