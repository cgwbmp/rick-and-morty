import React from 'react';
import style from './index.module.css';

interface EpisodeCardProps {
  name: string,
  episode: string,
}

const EpisodeCard: React.FC<EpisodeCardProps> = (props: EpisodeCardProps) => {
  const { name, episode } = props;
  return (
    <div className={style.card}>
      <p className={style.info}>
        {episode}
      </p>
      <h4 className={style.title}>
        {name}
      </h4>
    </div>
  );
};

export default EpisodeCard;
