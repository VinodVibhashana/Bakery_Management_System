import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ItemTable from './components/ItemTable';
import AnalyticsPage from './components/AnalyticsPage';
import OrderPage from './components/OrderPage';
import ReturnPage from './components/ReturnPage';
import Table from './components/table';
// Import other components for return, support pages

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
        <Route path="/" element={<Table />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/items" element={<ItemTable />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/return" element={<ReturnPage />} />
          
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
