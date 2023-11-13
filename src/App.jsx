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
      <div>
        <FaGithub />
        <FaLinkedin />
        <FaWhatsapp />
      </div>
      {/* Icons End */}

      {/* Titles Start */}
      <div>
        <span>Hi!</span>
        <h1>{"I'm CrissRayes.dev"}</h1>
        <h2>Full Stack Web Developer</h2>
        <span>
          {
            "I love designing and developing cool solutions for people's lives, solving challenges and enjoying the journey."
          }
        </span>
      </div>
      {/* Titles End */}

      {/* Profile Start */}
      <div>
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
      <div>
        <h2>Tools</h2>
        <div>
          <FaReact />
          <span>React</span>
        </div>
        <div>
          <FaJs />
          <span>JavaScript</span>
        </div>
        <div>
          <FaNodeJs />
          <span>NodeJS</span>
        </div>
        <div>
          <FaDatabase />
          <span>PostgreSQL</span>
        </div>
        <div>
          <FaFigma />
          <span>Figma</span>
        </div>
        <div>
          <FaSass />
          <span>Sass</span>
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
