// DOM
let cog=document.getElementById('cogWheel');
let hideText=document.getElementById('hideText');
let unhideText=document.getElementById('unhideText');
let cogContainer=document.getElementById('cogContainer');
let spanContainer=document.getElementById('spanContainer');

// Hide and Unhide button
$('#hideText').click(function(){
let cogWidth=$('#cogWheel').innerWidth();
let rightPosition=$('#cogContainer').css('right');

    if (rightPosition=='0px') {
        $('#cogContainer').animate({right:`-${cogWidth}px`},1000);
        $('#hideText').html('Unhide');
    }
    else {
        $('#cogContainer').animate({right:'0px'},1000);
        $('#hideText').html('Hide');
    };
});


cog.addEventListener('click',function(){
$('#handicapOptions').fadeToggle(1000)
});

// spanContainer.addEventListener('mouseover',function(){
// $('#hideText').addClass('d-inline');
// });
// // cog.addEventListener('mouseleave',function(){
// // $('#hideText').toggleClass('d-inline').setTimeOut(3000)
// // })
// function setTime(){setTimeout(function(){
//     $('#hideText').removeClass('d-inline');
// },2000)
// };





