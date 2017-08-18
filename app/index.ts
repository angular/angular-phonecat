import * as $ from "jquery";
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as angular from 'angular';
import * as ngAnimate from 'angular-animate';
import * as angular_resource from 'angular-resource';
import * as angular_route from 'angular-route';

require('./app.css');
require('./app.animations.css');


/*require('file-loader!./phones/phones.json');
require('file-loader!./phones/dell-streak-7.json');
require('file-loader!./phones/dell-venue.json');
require('file-loader!./phones/droid-2-global-by-motorola.json');
require('file-loader!./phones/droid-pro-by-motorola.json');
require('file-loader!./phones/lg-axis.json');
require('file-loader!./phones/motorola-atrix-4g.json');
require('file-loader!./phones/motorola-bravo-with-motoblur.json');
require('file-loader!./phones/motorola-charm-with-motoblur.json');
require('file-loader!./phones/motorola-defy-with-motoblur.json');
require('file-loader!./phones/motorola-xoom.json');
require('file-loader!./phones/motorola-xoom-with-wi-fi.json');
require('file-loader!./phones/nexus-s.json');
require('file-loader!./phones/samsung-galaxy-tab.json');
require('file-loader!./phones/samsung-gem.json');
require('file-loader!./phones/samsung-mesmerize-a-galaxy-s-phone.json');
require('file-loader!./phones/samsung-mesmerize-a-galaxy-s-phone.json');
require('file-loader!./phones/samsung-transform.json');
require('file-loader!./phones/sanyo-zio.json');
require('file-loader!./phones/t-mobile-g2.json');
require('file-loader!./phones/t-mobile-mytouch-4g.json');*/


import './app.module.ajs.ts';
import './app.config.ts';
import './app.animations.ts';
import './core/core.module.ts';
//import './core/checkmark/checkmark.filter.ts';
import './core/phone/phone.module.ts';
//import './core/phone/phone.service.ts';
import './phone-list/phone-list.module.ts';
//import './phone-list/phone-list.component.ts';
import './phone-detail/phone-detail.module.ts';
//import './phone-detail/phone-detail.component.ts';


