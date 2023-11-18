import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const Social = () => {
  const openRrss = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='rrss'>
      <FaGithub
        className='icon'
        onClick={() => {
          openRrss('https://github.com/CrissRayes');
        }}
      />
      <FaLinkedin
        className='icon'
        onClick={() => {
          openRrss('https://www.linkedin.com/in/crissrayes');
        }}
      />
      <FaWhatsapp
        className='icon'
        onClick={() => {
          window.open('https://wa.me/56932565655', '_blank');
        }}
      />
    </div>
  );
};
