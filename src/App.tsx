import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { SetWidthAction, setWidth } from './store/actions';
import './App.scss';

import Loading from './components/Loading';
import Header from './components/Header';
import Product from './components/Product';

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
