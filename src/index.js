import React from 'react';
import {render} from 'react-dom';
import './index.css';
import { App } from './App';
import {GlobalStyles} from '../componentStyles/globalStyles.js'

render(
  <React.StrictMode>
      <GlobalStyles/>
          <App />
  </React.StrictMode>,
  document.getElementById('root')
);
