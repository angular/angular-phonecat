'use strict';

/*angular.
  module('core').
  filter('checkmark', function() {
    return function(input: boolean) {
      return input ? '\u2713' : '\u2718';
    };
  });*/

  import { Pipe, PipeTransform } from '@angular/core';
  
  @Pipe({name: 'checkmark'})
  export class CheckmarkPipe implements PipeTransform {
    transform(input: boolean) {
      return input ? '\u2713' : '\u2718';
    }
  }