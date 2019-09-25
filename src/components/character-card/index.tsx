import React from 'react';
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
      <img className={style.image} src={image} alt="" />
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
