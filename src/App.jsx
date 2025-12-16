import PublicFileView from "./Pages/PublicFileView";
import Subscription from "./Pages/Subscription";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Transactions from "./Pages/Transactions";
import MyFiles from "./Pages/MyFiles";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import featuresData from './data';
import Features from './Components/Landing/Features';

const App = () => {
  const [features] = useState(featuresData);

  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myfiles" element={<MyFiles />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/publicfileview" element={<PublicFileView />} />

        </Routes>
      </BrowserRouter>
      <Features features={features} />
    </div>
  );
};

export default App;