import React from 'react';
import Link from 'next/link';
import style from './index.module.css';

interface MenuProps {
  currentPath?: string,
}

function isActive(path, currentPath) {
  return (currentPath === path) ? style.active : '';
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const { currentPath } = props;
  return (
    <nav className={style.menu}>
      <ul className={style.list}>
        <li className={[style.item, isActive('/episodes', currentPath)].join(' ')}>
          <Link href="/episodes">
            <a className={style.link}>
              Episodes
            </a>
          </Link>
        </li>
        <li className={[style.item, isActive('/characters', currentPath)].join(' ')}>
          <Link href="/characters">
            <a className={style.link}>
              Characters
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
