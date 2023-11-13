import './App.css';
import { Navigation } from './components/Navigation';
import { Social } from './components/Social';
import { Header } from './components/Header';
import { About } from './views/About';
import { Tools } from './components/Tools';
import { Projects } from './views/Projects';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Synaptech } from './components/Synaptech';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
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
              element={<Synaptech />}
            />
            <Route
              path='proyecto2'
              element={<h1>Proyecto 2</h1>}
            />
            <Route
              path='proyecto3'
              element={<h1>Proyecto 3</h1>}
            />
            <Route
              path='proyecto4'
              element={<h1>Proyecto 4</h1>}
            />
          </Route>
          {/* Ruta proyectos anidados End */}
          <Route
            path='*'
            element={<h1>404</h1>}
          />
        </Routes>
        <Tools />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
