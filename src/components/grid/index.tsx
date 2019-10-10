import React from 'react';
import GridItem from './item';
import style from './index.module.css';

interface GridProps {
  vertical?: boolean,
  children?: React.ReactNode,
}

const Grid: React.FC<GridProps> = (props: GridProps) => {
  const {
    children,
    vertical = false,
  } = props;
  return (
    <section
      className={[
        style.grid,
        (vertical) ? style.vertical : style.horisontal,
      ].join(' ')}
    >
      {children}
    </section>
  );
};

export default Grid;
export {
  GridItem,
};
