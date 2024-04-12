import React from 'react';
import Table from './components/Table';

export default function App() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Camper Leaderboard</h2>
      <Table />
    </div>
  );
}
