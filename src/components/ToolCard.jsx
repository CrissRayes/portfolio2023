export const ToolCard = ({ icon, name }) => {
  const IconComponent = icon;
  return (
    <div className='tools-icon'>
      <IconComponent className='tools-icon__fa' />
      <span className='tools-icon__name'>{name}</span>
    </div>
  );
};
