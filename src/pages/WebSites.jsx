export const WebSites = () => {
  return (
    <div className='container-cards'>
      <div className='card'>
        <img
          className='card-img'
          src='/img/synaptech-web.png'
          alt='Synaptech'
          onClick={() => {
            window.open('https://www.synaptech.cl', '_blank');
          }}
        />
        <div className='card-content'>
          <h3>Nombre Proyecto</h3>
          <span className='pill'>React JS</span>
          <span className='pill'>JavaScript</span>
          <span className='pill'>Tailwind CSS</span>
          <span className='pill'>AWS Amplify</span>
          <span className='pill'>AWS SES</span>
          <span className='pill'>AWS API Gateway</span>
          <span className='pill'>AWS Lambda</span>
        </div>
      </div>
    </div>
  );
};
