import React from 'react';
import style from './index.module.css';

interface GridItemProps {
  children?: React.ReactNode,
}

const GridItem: React.FC<GridItemProps> = (props: GridItemProps) => {
  const { children } = props;
  return (
    <div className={style.item}>
      {children}
    </div>
  );
};

export default GridItem;
