import './App.css';
import { Navigation } from './components/Navigation';
import { Social } from './components/Social';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';
import { WebSites } from './pages/WebSites';
import { GameProjects } from './pages/GameProjects';
import { ApiProjects } from './pages/ApiProjects';
import { WebApps } from './pages/WebApps';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={` ${theme === 'light' ? 'light' : 'dark'}`}>
      <div className='container'>
        <BrowserRouter>
          <Social />
          <Navigation />
          <Header />
          <Routes>
            <Route
              path='/'
              element={<About />}
            />
            {/* Ruta proyectos anidados start */}
            <Route
              path='/projects'
              element={<Projects />}
            >
              <Route
                index
                element={<WebApps />}
              />
              <Route
                path='webs'
                element={<WebSites />}
              />
              <Route
                path='games'
                element={<GameProjects />}
              />
              <Route
                path='apis'
                element={<ApiProjects />}
              />
            </Route>
            {/* Ruta proyectos anidados End */}
            <Route
              path='*'
              element={<h1>404</h1>}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
