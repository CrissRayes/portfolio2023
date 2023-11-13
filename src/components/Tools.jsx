import {
  FaDatabase,
  FaFigma,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { ToolCard } from './ToolCard';

export const Tools = () => {
  return (
    <div className='tools'>
      <div className='tools-icons'>
        <ToolCard
          icon={FaReact}
          name='React'
        />
        <ToolCard
          icon={FaJs}
          name={'JavaScript'}
        />
        <ToolCard
          icon={FaNodeJs}
          name={'NodeJS'}
        />
        <ToolCard
          icon={FaDatabase}
          name={'PostgreSQL'}
        />
        <ToolCard
          icon={FaFigma}
          name={'Figma'}
        />
        <ToolCard
          icon={FaSass}
          name={'Sass'}
        />
      </div>
    </div>
  );
};
