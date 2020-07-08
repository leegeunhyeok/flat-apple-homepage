import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { SetWidthAction, setWidth } from './store/actions';
import airpods from './assets/icons/airpods.svg';
import watch from './assets/icons/watch.svg';
import iphone from './assets/icons/iphone.svg';
import ipad from './assets/icons/ipad.svg';
import mac from './assets/icons/mac.svg';
import macPro from './assets/icons/mac-pro.svg';
import './App.scss';

import Loading from './components/Loading';
import Header from './components/Header';
import Product from './components/Product';
import Icon from './components/Icon';

import products from './data';

interface RootProps {
  setWidth: Function;
}

function App(props: RootProps) {
  const { setWidth } = props;
  const [loading, setLoadState] = useState(true);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    setWidth(window.innerWidth);

    // Color theme change detect
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        document.body.setAttribute('class', e.matches ? 'dark' : 'light');
      });

    // Init color theme
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.body.classList.add('dark');
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App-products">
        {products.map((data, index) => {
          return (
            <Product
              name={data.name}
              description={data.description}
              images={data.images}
              isNew={data.isNew}
              key={index}
            />
          );
        })}
      </div>
      <h1 className="App-title">Other Products</h1>
      <div className="App-other">
        <Icon icon={airpods} size="medium" />
        <Icon icon={watch} size="small" />
        <Icon icon={iphone} size="large" />
        <Icon icon={ipad} size="large" />
        <Icon icon={mac} size="extra" />
        <Icon icon={macPro} size="large" />
      </div>
      <CSSTransition in={loading} timeout={500} unmountOnExit classNames="fade">
        <Loading onload={() => setLoadState(false)} />
      </CSSTransition>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<SetWidthAction>) => ({
  setWidth: (width: number) => dispatch(setWidth(width)),
});

export default connect(null, mapDispatchToProps)(App);
