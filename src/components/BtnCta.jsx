export const BtnCta = ({ children, handleClick }) => {
  return (
    <button
      className='btn'
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
