//strat Our Clients section 
var images = document.querySelectorAll('.row .img-client') ;
var descrTextBox = document.querySelectorAll('.row #descrTextBox') ;
var lightBox = document.getElementById('lightBox') ;
var imgLightBox = document.getElementById('imgLightBox') ;
var smallLightBox = document.getElementById('smallLightBox') ;
var nextArrow = document.getElementById('nextArrow') ; 
var prevArrow = document.getElementById ('prevArrow') ;
var clossBtn = document.getElementById('clossBtn') ;
// var imagesArray = Array.from(images);
var imagesArray = [];
var indexImagesArray ;

for (var i= 0; i < images.length; i++) {
    imagesArray.push(images[i]);
}
console.log(imagesArray) 
console.log(images)

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click',function(eventinfo){
        var image = eventinfo.target ;
        indexImagesArray = imagesArray.indexOf(image)
        var imageSrc = image.getAttribute('src') ;
        imgLightBox.setAttribute('src' , imageSrc) ;
        lightBox.style.display = 'flex' ;
    });    
};

// lightBox.addEventListener('click' , function(){
//     lightBox.style.display = 'none' ;
// });

function closeLightBOX(){
    lightBox.style.display = 'none' ;
};
clossBtn.addEventListener('click' , closeLightBOX);

function nextArrowImage(){
    indexImagesArray++ ;
    if(indexImagesArray == imagesArray.length){
       indexImagesArray = 0 ;
    }

   var nextImage = imagesArray[indexImagesArray] ;
   var newImage = nextImage.getAttribute('src') ;
   imgLightBox.setAttribute('src' , newImage)
   console.log(nextImage)  
};
nextArrow.addEventListener('click' , nextArrowImage);

function prevArrowImage(){
    indexImagesArray-- ;
    if(indexImagesArray == -1){
       indexImagesArray = imagesArray.length-1 ;
    }

   var nextImage = imagesArray[indexImagesArray] ;
   var newImage = nextImage.getAttribute('src') ;
   imgLightBox.setAttribute('src' , newImage)
   console.log(nextImage)
};
prevArrow.addEventListener('click' , prevArrowImage);


document.addEventListener('keydown' , function(eventinfo){

if(lightBox.style.display == 'flex'){
    if (eventinfo.key ==  "ArrowRight") {
        nextArrowImage();
    }else if ( eventinfo.key =="ArrowLeft"){
         prevArrowImage();
    }else if (eventinfo.key == "Escape"){
        closeLightBOX();
    };
};
});



//end Our Clients section 
// strat offer section 
$(function() {
  $('.skitter-large').skitter();
});
// end offer section 