'use strict';
import * as angular from 'angular';
require('angular-animate');
require('angular-route');
require('angular-route');


// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);
