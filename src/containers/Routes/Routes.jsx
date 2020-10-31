import React from "react";
import { Router } from '@reach/router';
import Main from '../Main';
import Gallery from '../Gallery';

const Routes = () => {
  return (
    <Router>
      <Main path="main"/>
      <Gallery path="gallery" />
    </Router>
  );
};

export default Routes;
