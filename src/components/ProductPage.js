import React from 'react';
import RatingMeter from './RatingMeter';

const ProductPage = (props) => {
  return (
    <section>
      <div>
        <div className="description">
          <h1>Coffe Maker</h1>
          <div>
            <RatingMeter />
            <span>2</span>
          </div>
          <div>
            <h2>$105</h2>
            <div>BASIC</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit
            orci, efficitur eu vestibulum sed, lobortis id nisi. Sed tempor
            faucibus neque, at congue sapien pretium a. Cras sed fermentum
            dolor. Donec convallis orci blandit ligula vulputate posuere.
            Phasellus maximus euismod diam, non placerat dolor aliquet non. Sed
            in orci iaculis, fringilla erat ut, viverra purus. Aenean nec
            elementum nibh. Quisque eget urna tempus, laoreet sapien in,
            lobortis magna.
          </p>
          <p>See more.</p>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
