var results = ''
var orient
var url

//Declare an image array same as calling new Array();
var img = []

img[0] = "http://dev.actmapi.act.gov.au/images/run-sample/b19da079-03c5-4652-b4bb-b53ae2668aaa.jpg";
img[1] = "http://dev.actmapi.act.gov.au/images/run-sample/d6a6907e-983e-454e-b53d-e06cf2e5dfd2.jpg";
img[2] = "http://dev.actmapi.act.gov.au/images/run-sample/9c240828-371e-4d22-8202-9c290581d499.jpg";
img[3] = "http://dev.actmapi.act.gov.au/images/run-sample/61b761b8-adad-4b9c-abb5-a7996fe2e7f9.jpg";
img[4] = "http://dev.actmapi.act.gov.au/images/run-sample/4bb5f740-efe8-4d5a-abdc-88d5d67fd490.jpg";
img[5] = "http://dev.actmapi.act.gov.au/images/run-sample/ac7ec68e-c75b-4a7d-99aa-cad80b491b83.jpg";
img[6] = "http://dev.actmapi.act.gov.au/images/run-sample/c7036be3-2f27-4108-9aa1-662e1d37e138.jpg";
img[7] = "http://dev.actmapi.act.gov.au/images/run-sample/610ed0f4-11bf-4bd3-a6e9-03acb0982cdb.jpg";
img[8] = "http://dev.actmapi.act.gov.au/images/run-sample/5a0c5976-479e-4486-bef0-0d5208c12d08.jpg";
img[9] = "http://dev.actmapi.act.gov.au/images/run-sample/57523835-d396-45c2-baab-b5ad08412afe.jpg";
img[10] = "http://dev.actmapi.act.gov.au/images/run-sample/4c58533c-aafb-4489-9e3a-e7d5fa57626e.jpg";
img[11] = "http://dev.actmapi.act.gov.au/images/run-sample/a0ccb085-153c-45e1-898c-5a74c3963abe.jpg";
img[12] = "http://dev.actmapi.act.gov.au/images/run-sample/7c12f71f-4329-43e4-bc6d-52acc90d9f8e.jpg";
img[13] = "http://dev.actmapi.act.gov.au/images/run-sample/a03e3f82-ad84-49c2-961d-5d63dcdde52e.jpg";
img[14] = "http://dev.actmapi.act.gov.au/images/run-sample/e125640d-9e96-4c16-89fa-836ddf60b2ce.jpg";
img[15] = "http://dev.actmapi.act.gov.au/images/run-sample/ef63e768-ccd5-4569-9846-e3319b0378ce.jpg";
img[16] = "http://dev.actmapi.act.gov.au/images/run-sample/2c02ed22-c44d-45ad-827e-454314b7803e.jpg";
img[17] = "http://dev.actmapi.act.gov.au/images/run-sample/a2105935-cc21-4edf-9f57-ca1e9ff9c0ee.jpg";
img[18] = "http://dev.actmapi.act.gov.au/images/run-sample/2514f2ed-2d0e-4fbf-b629-9ab6d4c9876e.jpg";
img[19] = "http://dev.actmapi.act.gov.au/images/run-sample/7d12883a-3cc6-4c22-a672-eea551e465ce.jpg";
img[20] = "http://dev.actmapi.act.gov.au/images/run-sample/6798d8d9-986c-4a35-a36c-cfed11bd558e.jpg";
img[21] = "http://dev.actmapi.act.gov.au/images/run-sample/6cd2e09c-0dc6-4dd4-b3dc-1d5b8f3d0d5e.jpg";
img[22] = "http://dev.actmapi.act.gov.au/images/run-sample/34adcf78-cab7-4c21-abb9-b414fc4ef6de.jpg";
img[23] = "http://dev.actmapi.act.gov.au/images/run-sample/fcc57f09-5bd4-46d9-a2eb-52eb3f0cfe6e.jpg";
img[24] = "http://dev.actmapi.act.gov.au/images/run-sample/ecc3ea57-ee2f-4831-a1c5-1b79a9c06fae.jpg";
img[25] = "http://dev.actmapi.act.gov.au/images/run-sample/bf85efc5-cba4-492d-a2f6-633096c90dee.jpg";
img[26] = "http://dev.actmapi.act.gov.au/images/run-sample/63be7fc8-dd7f-4318-bdf2-1eaec3e13aae.jpg";
img[27] = "http://dev.actmapi.act.gov.au/images/run-sample/cafcf234-c2d0-48c2-8dee-dd09921ca6ce.jpg";
img[28] = "http://dev.actmapi.act.gov.au/images/run-sample/7861d519-2834-4aeb-968c-7623c16a223e.jpg";
img[29] = "http://dev.actmapi.act.gov.au/images/run-sample/28cd9203-a194-4cbf-be78-1e39284e873e.jpg";
img[30] = "http://dev.actmapi.act.gov.au/images/run-sample/61f16ba3-7e3f-4799-a7d5-22f2db46e1fe.jpg";
img[31] = "http://dev.actmapi.act.gov.au/images/run-sample/500943e0-e0e9-4f87-a308-aa135a824fbe.jpg";
img[32] = "http://dev.actmapi.act.gov.au/images/run-sample/7a2cd9a7-c27f-4528-be54-c689d000ba7e.jpg";
img[33] = "http://dev.actmapi.act.gov.au/images/run-sample/6ac333c0-49c7-4333-9f32-bd0d9599fffe.jpg";
img[34] = "http://dev.actmapi.act.gov.au/images/run-sample/e35781fa-296a-4ee7-a26f-7ca92a680d3e.jpg";
img[35] = "http://dev.actmapi.act.gov.au/images/run-sample/b6e99793-346e-4e58-81bb-c1e4f28ac4ae.jpg";
img[36] = "http://dev.actmapi.act.gov.au/images/run-sample/e529442e-e6e3-4b36-a098-a3357243dc2e.jpg";
img[37] = "http://dev.actmapi.act.gov.au/images/run-sample/1827821c-3c36-4dd3-a4cd-918c23ad64ce.jpg";
img[38] = "http://dev.actmapi.act.gov.au/images/run-sample/05231f5c-8955-43a2-a444-8a2ead86ae1e.jpg";
img[39] = "http://dev.actmapi.act.gov.au/images/run-sample/1071c9b6-98bc-48f4-b933-4fb4db9e567e.jpg";
img[40] = "http://dev.actmapi.act.gov.au/images/run-sample/eff594c2-52db-468f-bae3-9cc4011278f5.jpg";
img[41] = "http://dev.actmapi.act.gov.au/images/run-sample/b3c5d50b-b3b6-4bb4-bc6d-c8cc7d432fcf.jpg";
img[42] = "http://dev.actmapi.act.gov.au/images/run-sample/9b3b9296-538f-43ad-95cb-467dc6de5918.jpg";
img[43] = "http://dev.actmapi.act.gov.au/images/run-sample/a322d53f-a4ac-4070-8d3c-94abfd8c7678.jpg";
img[44] = "http://dev.actmapi.act.gov.au/images/run-sample/c2a6573f-0e2b-4797-b90b-2c7a6ae27439.jpg";
img[45] = "http://dev.actmapi.act.gov.au/images/run-sample/231ceb22-4dbe-4833-b65e-3c3693c92774.jpg";
img[46] = "http://dev.actmapi.act.gov.au/images/run-sample/fcead72a-c2e1-42c1-8224-fcc8d62b8d3a.jpg";
img[47] = "http://dev.actmapi.act.gov.au/images/run-sample/67f02604-70bd-45d5-8d5d-a75f757ea465.jpg";
img[48] = "http://dev.actmapi.act.gov.au/images/run-sample/2ad0d32f-462d-4400-8601-ab75fbeda932.jpg";
img[49] = "http://dev.actmapi.act.gov.au/images/run-sample/a8417a4a-5324-47de-886b-09c409dbd3b4.jpg";
img[50] = "http://dev.actmapi.act.gov.au/images/run-sample/6e49fcbe-7703-4940-8078-e269ad251dc5.jpg";
img[51] = "http://dev.actmapi.act.gov.au/images/run-sample/3d217807-af6b-4c48-87a1-3699dd0cadb2.jpg";
img[52] = "http://dev.actmapi.act.gov.au/images/run-sample/59a2f3b2-d298-4bd7-8102-8ea6773a2e85.jpg";
img[53] = "http://dev.actmapi.act.gov.au/images/run-sample/55454ddb-f861-4176-af78-d82d03139120.jpg";
img[54] = "http://dev.actmapi.act.gov.au/images/run-sample/155d9e63-2722-4630-97da-fbe7ef3e45b7.jpg";
img[55] = "http://dev.actmapi.act.gov.au/images/run-sample/c7851083-930c-479d-9b58-4502561e0728.jpg";
img[56] = "http://dev.actmapi.act.gov.au/images/run-sample/593da8fa-2e78-420e-9e35-1f57ae3e7c9a.jpg";
img[57] = "http://dev.actmapi.act.gov.au/images/run-sample/62d22046-24a7-4b2f-9982-d8df583f2a8e.jpg";
img[58] = "http://dev.actmapi.act.gov.au/images/run-sample/6c8482fc-4190-4bce-9d7f-da032fd05b96.jpg";
img[59] = "http://dev.actmapi.act.gov.au/images/run-sample/76ce5dfc-a7f5-4546-a261-c2e1a7089cec.jpg";
img[60] = "http://dev.actmapi.act.gov.au/images/run-sample/f9f4e16f-c70f-412f-85e7-0961d1d73097.jpg";
img[61] = "http://dev.actmapi.act.gov.au/images/run-sample/9b386488-5310-42b6-99ce-ca7ef76add6a.jpg";
img[62] = "http://dev.actmapi.act.gov.au/images/run-sample/41906959-3866-4119-a124-d9198550c1fa.jpg";
img[63] = "http://dev.actmapi.act.gov.au/images/run-sample/13e875b0-7927-404a-8509-a589a012fbd7.jpg";
img[64] = "http://dev.actmapi.act.gov.au/images/run-sample/94527c91-45af-4cc2-9e08-4e8621600d67.jpg";
img[65] = "http://dev.actmapi.act.gov.au/images/run-sample/2dc306ee-6e1d-4e86-aa35-2e2c2dfff081.jpg";
img[66] = "http://dev.actmapi.act.gov.au/images/run-sample/211403d0-c368-40ca-950d-45a35fedb6ec.jpg";
img[67] = "http://dev.actmapi.act.gov.au/images/run-sample/a06b8995-df78-4efb-8f55-24ca3d410b9a.jpg";
img[68] = "http://dev.actmapi.act.gov.au/images/run-sample/e0386097-2329-4e7a-a374-70c397f83cf7.jpg";
img[69] = "http://dev.actmapi.act.gov.au/images/run-sample/5078ac92-5fd0-4fea-b1f2-d28ec1329b6f.jpg";
img[70] = "http://dev.actmapi.act.gov.au/images/run-sample/5fc97834-4cb6-4b88-bf01-8fc8150ee679.jpg";
img[71] = "http://dev.actmapi.act.gov.au/images/run-sample/d00ca3ea-e6c3-43de-8793-a4553a4958ab.jpg";
img[72] = "http://dev.actmapi.act.gov.au/images/run-sample/62acad1c-6b0c-4881-a665-c82079db7db7.jpg";
img[73] = "http://dev.actmapi.act.gov.au/images/run-sample/2e73794f-25d9-441a-b5ba-087fe8f39e20.jpg";
img[74] = "http://dev.actmapi.act.gov.au/images/run-sample/f1291a8e-c88c-4aee-afc9-0df852ddc445.jpg";
img[75] = "http://dev.actmapi.act.gov.au/images/run-sample/a07df717-5a75-4614-a186-14759756954d.jpg";
img[76] = "http://dev.actmapi.act.gov.au/images/run-sample/19fa8b7f-9cb2-4fa3-943a-c45630464874.jpg";
img[77] = "http://dev.actmapi.act.gov.au/images/run-sample/d8f8ba22-88a2-4d60-b081-b43ad2355b09.jpg";
img[78] = "http://dev.actmapi.act.gov.au/images/run-sample/61177aac-335a-460d-b05f-244ef64bcb38.jpg";
img[79] = "http://dev.actmapi.act.gov.au/images/run-sample/626e9dac-976d-467a-a2ea-51374b1e0e06.jpg";
img[80] = "http://dev.actmapi.act.gov.au/images/run-sample/3015e643-e978-414f-8aa5-9d8954c2307c.jpg";
img[81] = "http://dev.actmapi.act.gov.au/images/run-sample/a5734942-ef94-4d4a-9d06-3b98ca8bb76c.jpg";
img[82] = "http://dev.actmapi.act.gov.au/images/run-sample/2881a766-0666-4384-a363-c08c479f24f9.jpg";
img[83] = "http://dev.actmapi.act.gov.au/images/run-sample/b45452bf-3da3-4b93-a533-af12c527d2ab.jpg";
img[84] = "http://dev.actmapi.act.gov.au/images/run-sample/ad1c1c31-329d-4ee1-980a-f84f9f952270.jpg";
img[85] = "http://dev.actmapi.act.gov.au/images/run-sample/2f7efe75-4e58-4a6d-828a-dab2f36e686d.jpg";
img[86] = "http://dev.actmapi.act.gov.au/images/run-sample/061d7d45-9d44-4eb3-aa2c-1a062550770a.jpg";
img[87] = "http://dev.actmapi.act.gov.au/images/run-sample/34933b95-dcd4-426d-9576-ffb1204ac54a.jpg";
img[88] = "http://dev.actmapi.act.gov.au/images/run-sample/908f21a1-970d-48df-b981-80dbf5807bd5.jpg";
img[89] = "http://dev.actmapi.act.gov.au/images/run-sample/a058d6ec-1915-42e3-acbd-e70d745b45c6.jpg";
img[90] = "http://dev.actmapi.act.gov.au/images/run-sample/163dadb9-3eb6-4fc0-90ba-e2d723c2952d.jpg";
img[91] = "http://dev.actmapi.act.gov.au/images/run-sample/6f31f146-3d2a-4ca2-8884-b097b44df46c.jpg";
img[92] = "http://dev.actmapi.act.gov.au/images/run-sample/09b8af0c-0d25-493e-9eaf-e01d423911e2.jpg";
img[93] = "http://dev.actmapi.act.gov.au/images/run-sample/01bced1a-124f-48d8-bbcc-224023ee3fea.jpg";
img[94] = "http://dev.actmapi.act.gov.au/images/run-sample/22930791-3091-4bac-b61a-b0d9edebe1dc.jpg";
img[95] = "http://dev.actmapi.act.gov.au/images/run-sample/f1dd15f7-be4c-4d06-9c85-b1bb35597415.jpg";
img[96] = "http://dev.actmapi.act.gov.au/images/run-sample/78351292-6425-493b-89a0-d526e537bb18.jpg";
img[97] = "http://dev.actmapi.act.gov.au/images/run-sample/ab173601-7d03-4a47-bf59-159a5e3e5961.jpg";
img[98] = "http://dev.actmapi.act.gov.au/images/run-sample/773e4aaf-7b77-4bcd-972d-f3889220b0dd.jpg";
img[99] = "http://dev.actmapi.act.gov.au/images/run-sample/df8cfdde-3984-4737-a4ba-b5e4e47b998a.jpg";
img[100] = "http://dev.actmapi.act.gov.au/images/run-sample/ed0c0089-8b84-4000-a9b2-b481df4e5cce.jpg";
img[101] = "http://dev.actmapi.act.gov.au/images/run-sample/69d946d8-a615-4b4e-bc42-f70f93c540e4.jpg";
img[102] = "http://dev.actmapi.act.gov.au/images/run-sample/593e4451-2ef0-4c26-a38e-47e60dc7f639.jpg";
img[103] = "http://dev.actmapi.act.gov.au/images/run-sample/6c4532da-710e-485c-b6ce-97bfd46b87ff.jpg";
img[104] = "http://dev.actmapi.act.gov.au/images/run-sample/ac2f094c-1650-420c-9b3c-3fa0e20d91c3.jpg";
img[105] = "http://dev.actmapi.act.gov.au/images/run-sample/e794bd24-6198-406b-8240-25c8d418fac7.jpg";
img[106] = "http://dev.actmapi.act.gov.au/images/run-sample/06a31318-255e-4bd9-9a3f-daee3ce7bd74.jpg";
img[107] = "http://dev.actmapi.act.gov.au/images/run-sample/7ace1c39-8651-405d-8ee6-0bc1afcd05f6.jpg";
img[108] = "http://dev.actmapi.act.gov.au/images/run-sample/e5c14e40-8691-4739-8520-b567c0b1db4c.jpg";
img[109] = "http://dev.actmapi.act.gov.au/images/run-sample/167a6c29-0dec-4073-b992-e5d749e662f5.jpg";
img[110] = "http://dev.actmapi.act.gov.au/images/run-sample/48c2b314-5f96-4155-aa69-19b14aaeb19d.jpg";
img[111] = "http://dev.actmapi.act.gov.au/images/run-sample/1e40ab7a-174e-4a81-8bc5-e96c3e4446ae.jpg";
img[112] = "http://dev.actmapi.act.gov.au/images/run-sample/03fd7133-7376-42a4-82c2-9588eae4961a.jpg";




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