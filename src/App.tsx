import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { SetWidthAction, setWidth } from './store/actions';
import './App.scss';

import Loading from './components/Loading';
import Header from './components/Header';

interface RootProps {
  setWidth: Function;
}

function App(props: RootProps) {
  const { setWidth } = props;
  const [loading, setLoadState] = useState(true);
  const getTestEl = () => {
    const style = {
      display: 'inline-block',
      width: '200px',
      height: '200px',
      marginTop: '1.5rem',
      backgroundColor: 'dodgerblue',
    };

    return <span style={style} />;
  };

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    setWidth(window.innerWidth);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      {/* For test */}
      {getTestEl()}
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
