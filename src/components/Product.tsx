import React from 'react';
import './Product.scss';
import { ProductData } from '../data';

const PUBLIC_PATH = '/images/products/';

const Product: React.FunctionComponent<ProductData> = (props) => {
  return (
    <div className="Product">
      {/* Product basic information area */}
      <div className="Product-information">
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
    </div>
  );
};

export default Product;
