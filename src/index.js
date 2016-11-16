'use strict';

$.ready(function (error) {
    console.log('helloworld');
    console.log('helloworld');
    if (error) {
        console.log(error);
        return;
    }

    $('#led-r').turnOn();
});

$.end(function () {
    $('#led-r').turnOff();
});
