var results = ''
var orient
var url

//Declare an image array same as calling new Array();
var img = []

img[0] = "https://i.ibb.co/nnrNzpL/d2ee9cf2-f025-492d-8000-54b1db356d59.jpg";
img[1] = "https://i.ibb.co/mtKPjgy/baa4a84c-c20e-4ac8-a188-3c4bae234277.jpg";
img[2] = "https://i.ibb.co/CVpHBhG/08320661-4fe3-4568-999e-543eda218d23.jpg";
img[3] = "https://i.ibb.co/xY7jsgX/66685fc2-92ec-4e3e-b3e0-2660d7c99e42.jpg";
img[4] = "https://i.ibb.co/CVpHBhG/08320661-4fe3-4568-999e-543eda218d23.jpg";
img[5] = "https://i.ibb.co/NYbM5hN/4394cd1b-f30d-47f1-87bd-2aa8f3d652a4.jpg";
img[6] = "https://i.ibb.co/NYbM5hN/4394cd1b-f30d-47f1-87bd-2aa8f3d652a4.jpg";
img[7] = "https://i.ibb.co/xY7jsgX/66685fc2-92ec-4e3e-b3e0-2660d7c99e42.jpg";
img[8] = "https://i.ibb.co/fNN7VX8/5bdd5cf4-824f-4c4a-8660-e9c17e538ff5.jpg";
img[9] = "https://i.ibb.co/NYbM5hN/4394cd1b-f30d-47f1-87bd-2aa8f3d652a4.jpg";
img[10] = "https://i.ibb.co/mtKPjgy/baa4a84c-c20e-4ac8-a188-3c4bae234277.jpg";
img[11] = "https://i.ibb.co/NYbM5hN/4394cd1b-f30d-47f1-87bd-2aa8f3d652a4.jpg";



//Select all elements on the page with the name attribute equal to VCRImage
var images = document.querySelectorAll('[name=VCRImage]');

//For each image bind the click event
for(var i=0; i < images.length; i++)
{
  var image = images[i];
  //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener
  image.addEventListener('click', imageClicked(), false);
  image.addEventListener('mouseleave', leaveImageArea(), false);
}

function imageClicked()
{
  //Use a closure to wrap the counter variable
  //so each image element has their own unique counter
  var counter = 0;
  return function(event)
  {
    //Increment counter
    counter++;
    //The context of "this" is the image element
    //Use a modulus
    this.src = img[counter % img.length];
    
    url = this.src;
    results += url + ', ';
    var pWidth = $("div").innerWidth();
    var pOffset = $("div").offset(); 
    var x = event.pageX - pOffset.left;
    var y = event.pageY;
    
    
    if(pWidth/2 > x) 
        orient = 'L';
    else
        orient = 'R';
    results += orient + '\n';

  }
  
}

function leaveImageArea()
{
    return function(event)
    {
        console.log(this.src);
        console.log('check orientation');
    }
  
}

var app = angular.module('myApp', [], orient);
app.controller('myCtrl', function($scope) {
    $scope.myFunc = function(myE) {
        $scope.results = results;
    }
});


function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}