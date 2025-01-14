import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, User, FileText, BarChart2, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">AI Adaptive Care</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="flex items-center"><Activity className="mr-1" size={18} /> Dashboard</Link></li>
              <li><Link to="/profile" className="flex items-center"><User className="mr-1" size={18} /> Profile</Link></li>
              <li><Link to="/care-plan" className="flex items-center"><FileText className="mr-1" size={18} /> Care Plan</Link></li>
              <li><Link to="/health-metrics" className="flex items-center"><BarChart2 className="mr-1" size={18} /> Metrics</Link></li>
              <li><Link to="/notifications" className="flex items-center"><Bell className="mr-1" size={18} /> Alerts</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;