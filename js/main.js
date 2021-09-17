'use strict';

//set source of image to display in modal
$(document).ready(function(){
    $('.btn').click(function(){
        var val = $(this).attr('value');
        console.log('value of image: '+ val);
        $('#modalImage').attr('src', 'img/cat' + val + '.jpg');
    })
});

