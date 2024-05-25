import React from 'react';
import '../sass/components/KeyDataCard.scss';

const Card = ({ value, title, img, unit }) => {
  // Définition des classes de fond basées sur le titre
  const bgColor = {
    'Calories': 'bg_calorie',
    'Proteines': 'bg_chicken',
    'Glucides': 'bg_apple',
    'Lipides': 'bg_cheeseburger'
  }[title] || 'default_bg';

  return (
    <article className="card">
      <img src={img} alt={`${title} - logo`} className={bgColor}/>
      <div className="card_infos">
        <h3>{value.toLocaleString()} {unit}</h3>
        <p>{title}</p>
      </div>
    </article>
  );
};

export default Card;
