import React from 'react';
import style from './index.module.css';

interface LayoutProps {
  children?: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className={style.layout}>
      <header className={style.header}>
        <h1 className={style.title}>
          Welcome to The Rick and Morty Wiki!
        </h1>
      </header>
      {children}
    </div>
  );
};

export default Layout;
