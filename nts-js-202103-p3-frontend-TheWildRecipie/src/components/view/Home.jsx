import React from 'react';
import Carousel from '../common/Carousel';
import './Home.css';

function Home() {
  return (
    <div className="about">
      <h1 className="titre">Qui sommes nous ?</h1>
      <div className="container">
        <p className="texte">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
          impedit. Non inventore delectus natus, doloremque, tempore aliquid
          illo, amet iusto eligendi ducimus quasi? Excepturi fuga veritatis
          officia obcaecati iste hic. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam, nemo cupiditate numquam vel quae maiores a
          pariatur ipsum illum facere earum eum incidunt, quasi accusantium
          officia perferendis similique quisquam repellat. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. At quidem cum eaque assumenda
          tenetur delectus aut quas. Neque mollitia, maxime quam doloremque
          labore eos quod dolorum a numquam, tempore error. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quod sed, aut aliquid cumque
          ipsam quaerat deserunt asperiores hic odit dignissimos consequatur
          animi nesciunt voluptatum laudantium velit enim exercitationem officia
          nobis!
        </p>

        <img
          className="imageAbout"
          src="https://cdn.discordapp.com/attachments/821367454559240222/867398838691430450/spaghetti-1932466_960_720.jpg"
          alt="imageCuisine"
        />
      </div>
      <Carousel />
    </div>
  );
}

export default Home;
