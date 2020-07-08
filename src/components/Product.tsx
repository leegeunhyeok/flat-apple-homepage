import React from 'react';
import './Product.scss';

import Button from './Button';
import bag from '../assets/icons/bag.svg';

import { ProductData } from '../data';

const PUBLIC_PATH = '/images/products/';

const Product: React.FunctionComponent<ProductData> = (props) => {
  return (
    <div className="Product">
      {/* Preview area - Images */}
      <div className="Product-preview">
        <div className="Product-preview__area">
          <img
            className="light"
            alt="preview-light"
            src={PUBLIC_PATH + props.images.light}
          />
          <img
            className="dark"
            alt="preview-dark"
            src={PUBLIC_PATH + props.images.dark}
          />
        </div>
      </div>
      {/* Product basic information area */}
      <div className="Product-information">
        <div className="Product-information__top">
          {props.isNew && <span className="new" />}
          <h2>{props.name}</h2>
          {props.description.split('\n').map((line, index) => {
            return (
              <p key={index}>
                {line}
                <br />
              </p>
            );
          })}
        </div>
        <div className="Product-information__bottom">
          <Button icon={bag}>Buy</Button>
          <span>Learn more</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
