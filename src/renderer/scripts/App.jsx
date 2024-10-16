import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {TooltipProvider} from '@/components/ui/tooltip';
import {Dashboard} from "./pages/dashboard05";

const App = () => {
  return (
      <TooltipProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
          </Routes>
        </Router>
      </TooltipProvider>
  );
};

export default App;