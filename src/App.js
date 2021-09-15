import React from 'react';
import './App.css';
import Button from './Components/Button';
import Product from './Components/Product';
import Tile from "./Components/Tile";

import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav className="buttons">
              <Button id="collection" text="to the collection"></Button>
              <Button id="shop" text="shop all bags"></Button>
              <Button id="preorder" text="pre-orders" disabled={true}></Button>
          </nav>

          <main>
              <Product name="The handy bag" image={bag1} prijs="€400,-" label="Best seller"></Product>
              <Product name="The stylish bag" image={bag2} prijs="€250,-" label="Best seller"></Product>
              <Product name="The simple bag" image={bag3} prijs="€300,-" label="New collection"></Product>
              <Product name="The trendy bag" image={bag4} prijs="€150,-" label="New collection"></Product>
          </main>

          <footer>
              <Tile title="The Brand" paragraphs="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore harum iure qui, quo voluptatem!"></Tile>
              <Tile text="The Brand" image={brand}></Tile>
              <Tile text="Our Story" image={our_story}></Tile>
              <Tile title="Our Story" paragraphs="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, officia!"></Tile>
          </footer>
      </>
  );
}

export default App;



