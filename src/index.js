/**
 * [IMPORT, EXPORT, MODULES]
 * Call some code from this file (js, css, etc);
 * so when we bundle this file with npm start its gonna go grab all the relevant dependencies and put them all into a file which in this part is gonna bundle the five js file together for us;
 * but first we have to declare which file depend on what
 * using ES6 import and export syntax
 */

import { run } from './app/app';
import './main.scss';
import { AlertService } from './app/alert.service';
import { ComponentService } from './app/component.service';
const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);
