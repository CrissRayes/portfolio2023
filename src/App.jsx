import './App.css';
import { Navigation } from './components/Navigation';
import { Social } from './components/Social';
import { Header } from './components/Header';
import { About } from './views/About';
import { Projects } from './views/Projects';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Synaptech } from './components/Synaptech';
import { Vernux } from './components/Vernux';
import { Urbanus } from './components/Urbanus';

function App() {
  return (
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
              element={<Synaptech />}
            />
            <Route
              path='vernux'
              element={<Vernux />}
            />
            <Route
              path='urbanus'
              element={<Urbanus />}
            />
            {/* <Route
              path='proyecto4'
              element={<h1>Proyecto 4</h1>}
            /> */}
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
  );
}

export default App;
