'use strict';

angular.module('brackCrackApp')
    .service('Session', function () {
        this.create = function (uid, user) {
            this.uid = uid;
            this.user = user;
            return this.user;
        };
        this.destroy = function () {
            this.uid = null;
            this.user = null;
        };
    })
