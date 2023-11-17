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
        // click to chat by whatsapp
        onClick={() => {
          // alert indicando que seras redirigido a whatsapp
          // si confirma, se redirige a whatsapp
          // si cancela, no se redirige a whatsapp y se queda en la pagina
          if (confirm('Serás redirigido a Whatsapp')) {
            window.open('https://wa.me/56932565655', '_blank');
          } else {
            return;
          }

          // openRrss('https://wa.me/56932565655');
        }}
      />
    </div>
  );
};
