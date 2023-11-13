import { Link, Outlet } from 'react-router-dom';

export const Projects = () => {
  return (
    <div className='projects'>
      <h2>Projects</h2>
      <div>
        <Link to='/projects'>Synaptech</Link>
        <Link to='proyecto2'>Barbershops</Link>
        <Link to='proyecto3'>Vernux</Link>
        <Link to='proyecto4'>Tickets</Link>
      </div>
      <Outlet />
      {/* Card 2 Start */}
      {/* <div>
        <h3>Booking Project</h3>
        <span>Web application</span>
        <p>
          This is a Beta project for barbershops to manage their bookings and
          clients. It was developed with PostgreSQL, Express, React and NodeJS.
          Frontend available for desktop.
        </p>
      </div> */}
      {/* Card 2 End */}
      {/* Card 3 Start */}
      {/* <div>
        <h3>Vernux Website</h3>
        <span>Website</span>
        <p>
          Responsive website for a custom furniture and interior design company.
          It was developed with Html, CSS and JavaScript.
        </p>
      </div> */}
      {/* Card 3 End */}
      {/* Card 4 Start */}
      {/* <div>
        <h3>Customer Service Tickets</h3>
        <span>Web Application</span>
        <p>
          This is a Beta project for a building company to manage their customer
          service tickets. It was developed with PostgreSQL, Express, React and
          NodeJS.
        </p>
      </div> */}
      {/* Card 4 End */}
    </div>
  );
};
