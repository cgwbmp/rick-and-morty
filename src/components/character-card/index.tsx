/// <reference path="react-lazy-load-image-component.d.ts" />
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import style from './index.module.css';

interface CharacterCardProps {
  name: string,
  image: string,
  status?: string,
}

const CharacterCard: React.FC<CharacterCardProps> = (props: CharacterCardProps) => {
  const { name, image, status } = props;
  return (
    <div className={style.card}>
      <LazyLoadImage
        className={style.image}
        src={image}
        alt=""
      />
      <h4 className={style.title}>
        {name}
      </h4>
      {
        (status === 'Dead') ? (
          <span className={style.dead} title={status} />
        ) : null
      }
    </div>
  );
};

export default CharacterCard;
