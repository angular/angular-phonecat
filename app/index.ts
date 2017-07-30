import * as $ from "jquery";
import * as angular from 'angular';
import * as ngAnimate from 'angular-animate';
import * as angular_resource from 'angular-resource';
import * as angular_route from 'angular-route';

require('./phones/phones.json');


import './app.module.ajs.ts';
import './app.config.ts';
import './app.animations.ts';
import './core/core.module.ts';
import './core/checkmark/checkmark.filter.ts';
import './core/phone/phone.module.ts';
import './core/phone/phone.service.ts';
import './phone-list/phone-list.module.ts';
import './phone-list/phone-list.component.ts';
import './phone-detail/phone-detail.module.ts';
import './phone-detail/phone-detail.component.ts';


