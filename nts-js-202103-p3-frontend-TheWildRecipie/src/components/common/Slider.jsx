import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import fraise from '../../media/fraise.jpg';
import salade from '../../media/salade.jpg';
import buche from '../../media/buche.jpg';

function Slider() {
  // const baseUrl = '';
  const data = [
    {
      title: 'Recette tarte aux fraises',
      subtitles: 'Recette Tarte aux fraises avec crème pâtissière.',
      img: fraise,
      id: 1,
    },
    {
      title: 'Salade fraiche',
      subtitles: 'Une recette facile à faire et très rafraichissante',
      img: salade,
      id: 2,
    },
    {
      title: 'la buche',
      subtitles: 'Recette de bûche roulée au chocolat facile et rapide !',
      img: buche,
      id: 3,
    },
  ];
  return (
    <div className="carousel1">
      <Carousel className="positionImage" autoPlay infiniteLoop>
        {data.map((slide) => (
          <div key={slide.id}>
            <img src={slide.img} alt="" />
            <div className="overlay">
              <h2 className="overlay_title">{slide.title}</h2>
              <p className="overlay_text">{slide.subtitles}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
