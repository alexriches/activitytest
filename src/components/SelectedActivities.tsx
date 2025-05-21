import React from 'react';
import { Activity } from '../types/types';
import { X } from 'lucide-react';

interface SelectedActivitiesProps {
  activities: Activity[];
  onRemove: (id: string) => void;
}

const SelectedActivities: React.FC<SelectedActivitiesProps> = ({ 
  activities, 
  onRemove 
}) => {
  if (activities.length === 0) return null;

  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 py-3 px-4 z-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Your Selected Activities</h3>
            <span className="text-sm text-gray-500">{activities.length} selected</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {activities.map(activity => (
              <div 
                key={activity.id}
                className="flex items-center bg-blue-100 text-blue-800 rounded-full py-1 px-3 text-sm"
              >
                <span className="mr-1">{activity.title}</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(activity.id);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedActivities;