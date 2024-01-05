import { Tools } from '../components/Tools';

export const About = () => {
  return (
    <div className='about'>
      <h2>About</h2>
      <div className='about-content'>
        <p>
          My name is Cristian Ramírez, I&apos;m full stack web developer based
          in Dublin, Ireland 🇮🇪. I have been designing and developing web
          applications for over 4 years. I began my career as a freelancer and
          later I worked for a software development company as a frontend
          developer.
        </p>
        <p>
          My knowledge and expertise are result of my passion for learning and
          my practical experience. I&apos;m committed to continuous learning and
          I have a natural ability to collaborate effectively in
          multidisciplinary teams.
        </p>
        <p>
          My clients and projects are my top priority, and I bring 100%
          commitment to everything I do.
        </p>
        <Tools />
      </div>
    </div>
  );
};
