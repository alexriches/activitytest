import React from 'react';
import { useActivities } from './hooks/useActivities';
import { categories } from './data/activities';

// Components
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ActivityGrid from './components/ActivityGrid';
import SelectedActivities from './components/SelectedActivities';
import EmptyState from './components/EmptyState';
import Footer from './components/Footer';

function App() {
  const { 
    activities, 
    selectedActivities, 
    toggleActivity, 
    filterByCategory, 
    activeCategory 
  } = useActivities();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header selectedCount={selectedActivities.length} />
      
      <main className="container mx-auto px-4 py-6 flex-grow">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Find activities you love</h2>
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={filterByCategory}
          />
          
          {activities.length > 0 ? (
            <ActivityGrid 
              activities={activities}
              onActivityClick={toggleActivity}
            />
          ) : (
            <EmptyState 
              message="No activities match your filter"
              actionLabel="View All Activities"
              onAction={() => filterByCategory(null)}
            />
          )}
        </section>
      </main>
      
      <SelectedActivities 
        activities={selectedActivities}
        onRemove={toggleActivity}
      />
      
      <Footer />
    </div>
  );
}

export default App;