
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  delay = 0 
}) => {
  return (
    <div 
      className="glass-card p-6 rounded-xl h-full group hover:translate-y-[-5px] transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${color}`}
      >
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-white/70">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
