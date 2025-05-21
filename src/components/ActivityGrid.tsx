import React from 'react';
import { Activity } from '../types/types';
import ActivityCard from './ActivityCard';

interface ActivityGridProps {
  activities: Activity[];
  onActivityClick: (id: string) => void;
}

const ActivityGrid: React.FC<ActivityGridProps> = ({ activities, onActivityClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          onClick={onActivityClick}
        />
      ))}
    </div>
  );
};

export default ActivityGrid;