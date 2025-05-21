import { useState, useCallback } from 'react';
import { Activity } from '../types/types';
import { activities as initialActivities } from '../data/activities';

export function useActivities() {
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const toggleActivity = useCallback((id: string) => {
    setActivities((prevActivities) => 
      prevActivities.map((activity) => 
        activity.id === id 
          ? { ...activity, selected: !activity.selected } 
          : activity
      )
    );
  }, []);
  
  const filterByCategory = useCallback((categoryId: string | null) => {
    setActiveCategory(categoryId);
  }, []);
  
  const filteredActivities = activeCategory 
    ? activities.filter(activity => activity.category === activeCategory) 
    : activities;
  
  const selectedActivities = activities.filter(activity => activity.selected);
  
  return {
    activities: filteredActivities,
    selectedActivities,
    toggleActivity,
    filterByCategory,
    activeCategory,
  };
}