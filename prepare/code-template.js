var results = ''
var orient
var url

//Declare an image array same as calling new Array();
var img = []

FIND



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