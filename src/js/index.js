import { dataStore } from './data.js';
import { enableDragging } from './dragging';
import '../styles/style.css';

window.onload = () => {
  dataStore;// invoke the data store class
  enableDragging(); // enable element dragging
};