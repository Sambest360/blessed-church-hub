
import { Church, Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-church-yellow" />
              <span className="text-2xl font-bold">Grace Fellowship</span>
            </div>
            <p className="text-blue-100 mb-4">
              A community of faith, hope, and love. Join us as we grow together in Christ.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-church-yellow hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-church-yellow hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-church-yellow hover:text-white cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-church-yellow hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-church-yellow">Quick Links</h3>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#sermons" className="hover:text-white transition-colors">Sermons</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-church-yellow">Ministries</h3>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Youth Ministry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women's Ministry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Men's Ministry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Children's Ministry</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-church-yellow">Contact Info</h3>
            <div className="space-y-2 text-blue-100">
              <p>123 Faith Street<br />Hope City, HC 12345</p>
              <p>Phone: (555) 123-HOPE</p>
              <p>Email: info@gracefellowship.org</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 Grace Fellowship Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
