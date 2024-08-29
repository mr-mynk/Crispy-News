import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  
  const pageSize = 5;
  const apiKey = "9ac2e647af8b457e9682e1361f14b057";
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News 
                  key="general"
                  country="in"
                  pageSize={pageSize}
                  category="general"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News 
                  key="business"
                  country="in"
                  pageSize={pageSize}
                  category="business"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News 
                  key="entertainment"
                  country="in"
                  pageSize={pageSize}
                  category="entertainment"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News 
                  key="health"
                  country="in"
                  pageSize={pageSize}
                  category="health"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News 
                  key="science"
                  country="in"
                  pageSize={pageSize}
                  category="science"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News 
                  key="sports"
                  country="in"
                  pageSize={pageSize}
                  category="sports"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News 
                  key="technology"
                  country="in"
                  pageSize={pageSize}
                  category="technology"
                  apiKey={apiKey}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
