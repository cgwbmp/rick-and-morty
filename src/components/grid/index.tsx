import React from 'react';
import GridItem from './item';
import style from './index.module.css';

interface GridProps {
  children?: React.ReactNode,
}

const Grid: React.FC<GridProps> = (props: GridProps) => {
  const { children } = props;
  return (
    <section className={style.grid}>
      {children}
    </section>
  );
};

export default Grid;
export {
  GridItem,
};
