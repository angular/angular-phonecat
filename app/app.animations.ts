import * as angular from 'angular';

export class PhoneAnimationFactory implements ng.animate.IAnimateCallbackObject {
  
  constructor() {}

  addClass(element: JQuery, className: string, done: Function, options: ng.animate.IAnimationOptions) {
    if (className !== 'selected') return;
      (<any>element).css({
        display: 'block',
        position: 'absolute',
        top: 500,
        left: 0
      }).animate({
        top: 0
      }, done);

      return function animateInEnd(wasCanceled: boolean) {
        if (wasCanceled) 
          (<any>element).stop();
      };
  }

  removeClass(element: JQuery, className: string, done: Function, options: ng.animate.IAnimationOptions) {
      if (className !== 'selected') 
        return;

      (<any>element).css({
        position: 'absolute',
        top: 0,
        left: 0
      }).animate({
        top: -500
      }, done);

      return function animateOutEnd(wasCanceled: boolean) {
        if (wasCanceled) 
          (<any>element).stop();
      };
    }

}

angular.module('phonecatApp').animation('.phone', () => new PhoneAnimationFactory());
