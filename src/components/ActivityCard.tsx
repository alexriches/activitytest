import React from 'react';
import { Activity } from '../types/types';
import * as Icons from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  onClick: (id: string) => void;
}

type IconComponentProps = {
  [key: string]: React.ComponentType<{ className?: string }>;
};

const iconMap: IconComponentProps = {
  mountain: Icons.Mountain,
  camera: Icons.Camera,
  utensils: Icons.Utensils,
  flame: Icons.Flame,
  'book-open': Icons.BookOpen,
  waves: Icons.Waves,
  palette: Icons.Palette,
  bike: Icons.Bike,
  music: Icons.Music,
  flower: Icons.Flower2,
  puzzle: Icons.Puzzle,
  languages: Icons.Languages,
  heart: Icons.Heart,
  landmark: Icons.Landmark,
  'helping-hand': Icons.HeartHandshake,
  code: Icons.Code
};

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onClick }) => {
  const Icon = iconMap[activity.icon] || Icons.Activity;

  return (
    <div 
      className={`
        relative rounded-xl p-5 cursor-pointer transition-all duration-300
        ${activity.selected
          ? 'bg-blue-50 border-2 border-blue-500 shadow-md transform scale-[1.02]'
          : 'bg-white border border-gray-200 hover:shadow-md hover:border-blue-300'
        }
      `}
      onClick={() => onClick(activity.id)}
    >
      <div className="flex items-start mb-2">
        <div className={`
          p-3 rounded-lg mr-3
          ${activity.selected ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}
        `}>
          <Icon className="h-6 w-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-800 mb-1">{activity.title}</h3>
          <p className="text-sm text-gray-600">{activity.description}</p>
        </div>
        
        <div className={`
          h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all
          ${activity.selected 
            ? 'border-blue-500 bg-blue-500' 
            : 'border-gray-300 bg-white'}
        `}>
          {activity.selected && (
            <Icons.Check className="h-3 w-3 text-white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;