import { addPage, addPaths } from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';
// import home from './pages/home.js';
import portfolio from './portfollio/portfolio.js';

export default function () {
  addPage('', portfolio);
  addPaths('site', ['about', 'skills', 'contactme']);
}
