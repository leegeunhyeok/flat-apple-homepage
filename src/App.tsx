import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import './App.scss';

import { CommonState } from './store/reducers';
import { SetWidthAction, setWidth } from './store/actions';

import Header from './components/Header';

interface RootProps {
  setWidth: Function;
}

function App(props: RootProps) {
  const { setWidth } = props;
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
  setWidth(window.innerWidth);

  return (
    <div className="App">
      <Header />
      {/* For test */}
      {getTestEl()}
    </div>
  );
}

const mapStateToProps = (state: CommonState) => ({
  width: state.width,
});

const mapDispatchToProps = (dispatch: Dispatch<SetWidthAction>) => ({
  setWidth: (width: number) => dispatch(setWidth(width)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
