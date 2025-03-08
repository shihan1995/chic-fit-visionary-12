
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-fashion-neutral-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-fashion-neutral-900 font-semibold text-lg mb-6">stylish</h3>
            <p className="text-fashion-neutral-600 text-sm leading-relaxed mb-6">
              Redefining fashion with AI-powered style recommendations tailored to your personal preferences.
            </p>
          </div>
          
          <div>
            <h4 className="text-fashion-neutral-900 font-medium text-sm mb-6">Features</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/style-profile" className="text-fashion-neutral-600 text-sm hover:text-fashion-neutral-800 transition-colors">
                  Style Profile
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-fashion-neutral-600 text-sm hover:text-fashion-neutral-800 transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/color-analysis" className="text-fashion-neutral-600 text-sm hover:text-fashion-neutral-800 transition-colors">
                  Color Analysis
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-fashion-neutral-900 font-medium text-sm mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-fashion-neutral-600 text-sm hover:text-fashion-neutral-800 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-fashion-neutral-600 text-sm hover:text-fashion-neutral-800 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-fashion-neutral-600 text-sm hover:text-fashion-neutral-800 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-fashion-neutral-900 font-medium text-sm mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/terms" className="text-fashion-neutral-600 text-sm hover:text-fashion-neutral-800 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-fashion-neutral-600 text-sm hover:text-fashion-neutral-800 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-fashion-neutral-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-fashion-neutral-600 text-sm">
              © {new Date().getFullYear()} stylish. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
