'use strict';

class PhoneAnimationFactory {
  
  constructor() {
    
  }

  addClass(element: any, className: any, done: any) {
    if (className !== 'selected') return;
      element.css({
        display: 'block',
        position: 'absolute',
        top: 500,
        left: 0
      }).animate({
        top: 0
      }, done);

      return function animateInEnd(wasCanceled: any) {
        if (wasCanceled) element.stop();
      };
  }

  removeClass(element: any, className: any, done: any) {
      if (className !== 'selected') return;

      element.css({
        position: 'absolute',
        top: 0,
        left: 0
      }).animate({
        top: -500
      }, done);

      return function animateOutEnd(wasCanceled: any) {
        if (wasCanceled) element.stop();
      };
    }

}

angular.module('phonecatApp').animation('.phone', () => new PhoneAnimationFactory());
