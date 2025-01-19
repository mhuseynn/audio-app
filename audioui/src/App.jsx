
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Register/RegisterPage';
import AudioList from './components/AudioList/AudioList.jsx';
import CloudinaryUploadWidget from './components/CloudWidget.jsx';
import HomePage from './components/Home/Home.jsx';  


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true); 
    }
  }, []);

  
  const handleLogin = (token) => {
    localStorage.setItem('authToken', token); 
    setIsAuthenticated(true);
  };

  
  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    setIsAuthenticated(false);
  };

  return (
    <>
      <Router>
        <Navbar onLogout={handleLogout} />
        {/* Routes for different pages */}
        <Routes>
          <Route 
            path="/"
            element={isAuthenticated ? (
              <>
               <CloudinaryUploadWidget />
                <AudioList />
               
              </>
            ) : (
              <HomePage/>
            )}
          />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
