import React from 'react';
import { Route } from 'react-router-dom';
//components imports
import Home from './features/Home/Home';
import './App.css';
//Creating the base colors
import {
  ThemeProvider
} from "@material-ui/core/styles";
import theme from "./app/themeConfig";

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Route
        exact path='/'
        render={() => <Home/>}   
      />

    </ThemeProvider>
  );
}

export default App;
