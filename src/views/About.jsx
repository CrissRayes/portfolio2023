import { Tools } from '../components/Tools';

export const About = () => {
  return (
    <div className='about'>
      <h2>About</h2>
      <div className='about-content'>
        <p>
          My name is Cristian Ramírez, I&apos;m full stack web developer based
          in Dublin, Ireland. I have been designing and developing web
          applications for over 4 years. I began my career as a freelancer and
          later I worked for a software development company as a frontend
          developer.
        </p>
        <p>
          My knowledge and expertise are result of my passion for self-learning,
          practical experience and completion of two full stack web development
          bootcamps. I&apos;m committed to continuous learning and have a
          natural ability to collaborate effectively in multidisciplinary teams.
        </p>
        <p>
          My commitment to my clients and my projects is constant, and I always
          strive for the outcome of my work to be of the highest level.
        </p>
        <Tools />
      </div>
    </div>
  );
};
