import React from 'react';
import style from './index.module.css';

interface CharacterCardProps {
  name: string,
  image: string,
}

const CharacterCard: React.FC<CharacterCardProps> = (props: CharacterCardProps) => {
  const { name, image } = props;
  return (
    <div className={style.card}>
      <img className={style.image} src={image} alt="" />
      <h4 className={style.title}>
        {name}
      </h4>
    </div>
  );
};

export default CharacterCard;