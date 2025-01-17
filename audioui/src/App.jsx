// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import LoginPage from './components/Login/Login'
// import RegisterPage from './components/Register/RegisterPage'
// import Navbar from './components/Navbar/Navbar.jsx'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AudioUpload from './components/UploadPage/UploadPage.jsx'
// import CloudinaryUploadWidget from './components/CloudWidget.jsx'
// import AudioList from './components/AudioList/AudioList.jsx'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Router>
//         <Navbar/>
//         <AudioList/>
//         <CloudinaryUploadWidget/>
//       <Routes>
//         <Route path="/login" element={<LoginPage/>} /> 
//         <Route path="/register" element={<RegisterPage />} />
        
//       </Routes>
//     </Router>
//     </>
//   )
// }

// export default App
// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar.jsx';
// import LoginPage from './components/Login/Login';
// import RegisterPage from './components/Register/RegisterPage';
// import AudioList from './components/AudioList/AudioList.jsx';
// import CloudinaryUploadWidget from './components/CloudWidget.jsx';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Handler to log in the user
//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   // Handler to log out the user
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <>
//       <Router>
//         <Navbar onLogout={handleLogout} />
//         {isAuthenticated ? (
//           <>
//             <AudioList />
//             <CloudinaryUploadWidget />
//           </>
//         ) : (
//           <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
//             Please log in to view audios
//           </h2>
//         )}
//         <Routes>
//           <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//           <Route path="/register" element={<RegisterPage />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Register/RegisterPage';
import AudioList from './components/AudioList/AudioList.jsx';
import CloudinaryUploadWidget from './components/CloudWidget.jsx';
import HomePage from './components/HomePage.jsx';  // New home page for unauthenticated users


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handler to log in the user
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Handler to log out the user
  const handleLogout = () => {
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
                <AudioList />
                <CloudinaryUploadWidget />
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
