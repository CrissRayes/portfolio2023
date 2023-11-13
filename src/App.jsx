import './App.css';
import {
  FaDatabase,
  FaFigma,
  FaGithub,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaSass,
  FaWhatsapp,
} from 'react-icons/fa';

function App() {
  return (
    <div className='container'>
      {/* Icons Start */}
      <div className='navigation'>
        <FaGithub className='icon' />
        <FaLinkedin className='icon' />
        <FaWhatsapp className='icon' />
      </div>
      {/* Icons End */}

      {/* Titles Start */}
      <div className='header'>
        <span>Hi!</span>
        <h1>{"I'm Criss"}</h1>
        <h2>Full Stack Web Developer</h2>
        <span>
          {
            "I love designing and developing cool solutions for people's lives, solving challenges and enjoying the journey."
          }
        </span>
      </div>
      {/* Titles End */}

      {/* Profile Start */}
      <div className='about'>
        <h2>About</h2>
        <p>
          My name is Cristian Ramírez, I&apos;m full stack web developer based
          in Dublin, Ireland. I have been designing and developing web
          applications for over 4 years. I started in Chile as a freelancer and
          later worked for a software development company in Chile as a frontend
          developer. My knowledge and expertise stem from both my passion for
          self-learning and my participation in two web development bootcamps in
          Desafío Latam Academy. I actively engage in continuous learning and
          possess a natural ability to collaborate effectively in
          multidisciplinary teams.
        </p>
      </div>
      {/* Profile End */}

      {/* Tools Start */}
      <div className='tools'>
        <div className='tools-icons'>
          <div className='tools-icon'>
            <FaReact className='tools-icon__fa' />
            <span className='tools-icon__name'>React</span>
          </div>
          <div className='tools-icon'>
            <FaJs className='tools-icon__fa' />
            <span className='tools-icon__name'>JavaScript</span>
          </div>
          <div className='tools-icon'>
            <FaNodeJs className='tools-icon__fa' />
            <span className='tools-icon__name'>NodeJS</span>
          </div>
          <div className='tools-icon'>
            <FaDatabase className='tools-icon__fa' />
            <span className='tools-icon__name'>PostgreSQL</span>
          </div>
          <div className='tools-icon'>
            <FaFigma className='tools-icon__fa' />
            <span className='tools-icon__name'>Figma</span>
          </div>
          <div className='tools-icon'>
            <FaSass className='tools-icon__fa' />
            <span className='tools-icon__name'>Sass</span>
          </div>
        </div>
      </div>
      {/* Tools End */}

      {/* Projects Start */}
      <div>
        <h2>Projects</h2>
        {/* Card 1 Start */}
        <div>
          <h3>Synaptech</h3>
          <span>Responsive website</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            facere similique et soluta reiciendis perspiciatis quas possimus
            tenetur, odio officia. Placeat ea inventore accusantium quis
            voluptate soluta dolorum pariatur necessitatibus. It was developed
            with React and Tailwind CSS.
          </p>
        </div>
        {/* Card 1 End */}
        {/* Card 2 Start */}
        <div>
          <h3>Booking Project</h3>
          <span>Web application</span>
          <p>
            This is a Beta project for barbershops to manage their bookings and
            clients. It was developed with PostgreSQL, Express, React and
            NodeJS. Frontend available for desktop.
          </p>
        </div>
        {/* Card 2 End */}
        {/* Card 3 Start */}
        <div>
          <h3>Vernux Website</h3>
          <span>Website</span>
          <p>
            Responsive website for a custom furniture and interior design
            company. It was developed with Html, CSS and JavaScript.
          </p>
        </div>
        {/* Card 3 End */}
        {/* Card 4 Start */}
        <div>
          <h3>Customer Service Tickets</h3>
          <span>Web Application</span>
          <p>
            This is a Beta project for a building company to manage their
            customer service tickets. It was developed with PostgreSQL, Express,
            React and NodeJS.
          </p>
        </div>
        {/* Card 4 End */}
      </div>
      {/* Projects End */}
      {/* Footer */}
      <footer>
        <span>©2023 CrissRayes.dev</span>
      </footer>
    </div>
  );
}

export default App;
