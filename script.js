var photos = []; //Declare an empty array to store image element
var fileNames = []; //Declare an empty element to store image file names
var imageList = []; //Declare an empty array to store html list that contain an image
var image; //Declare an empty variable to store the assembles image list codes
var openList = "<li id='photo'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag
var openCaptionTag = "<h3 class='caption'>";
var closeCaptionTag = "</h3>";
var openDescTag = "<p class='description' onClick='displayInfo()'>";
var closeDescTag = "</p>";
var captionTexts = ["FROSTY CANOPY", "SNOWSTORM PEAKS", "LONELY MOUNTAIN", "SUNSET CANYON", "AUTUMN TREES", "BENT TREE", "MOUNTAIN TRAILS", "BLURRY WINTER", "COLD WOODS", "SLED DOGS"];
var descTexts = ["The top of a frozen tree", "A snowstorm over several peaks", "A mountain standing alone", "A sunset hidden behind a canyon", "Autumn trees displayed side by side", "A tree that has been bent", "Trails shown going through a mountain", "A depiction of what to expect from hypothermia", "A desolate spot amidst the trees", "A sled being pulled by a team of dogs"];
var infoTexts = ["The top of a frozen tree with icy spikes sticking off of it.", "A snowstorm over several peaks with a swirling background", "A mountain standing alone in a clear blue backdrop", "A sunset hidden behind a canyon with a darkening background", "Autumn trees displayed side by side standing straight up in the air", "A tree that has been bent in various different places", "Trails shown going through a mountain that look like veins going through a body", "A depiction of what to expect from hypothermia, causing blurs around the edges", "A desolate spot amidst the trees, which all seem to be dead.", "A sled being pulled by a team of dogs, They are all very good boys."];
var openHeaderTag = "<h1>";
var closeHeaderTag = "</h1>";
var openInfoTag = "<p>";
var closeInfoTag = "</p>";
var clickMeTag = "<p class='close' onClick='hideInfo()'>Click This To Close</p>"
var sectionLeft = document.getElementById("left");
var sectionMiddle = document.getElementById("middle");
var sectionRight = document.getElementById("right");
//Crate a loop to create 6 images starting with index of 0
for (var i = 0; i < 10; i++) {
    openDescTag = "<p class='description' onClick='displayInfo(" + (i+1) + ")'>";
    clickMeTag = "<p class='close' onClick='hideInfo(" + (i+1) + ")'>Click This To Close</p>"
    fileNames.push("photo" + (i + 1)); //Create image file name and store in the array
    photos.push("<img src ='images/" + fileNames[i] + ".jpg'>"); //Assemble file name into image element and store in an array
    image = openList + photos[i] + openCaptionTag + captionTexts[i] + closeCaptionTag + openDescTag + descTexts[i] + closeDescTag + closeList; //Assemble image element from array with list elements and store in a variable
    imageList.push(image); //Store(push) the assembled list code into an array
}
//Display all six image codes stored in the array
document.getElementById("album").innerHTML = imageList.join(" ");

function displayInfo(photoNum) {
    if(photoNum < 3 || (photoNum < 8 && photoNum > 5)) {
        sectionMiddle.style.visibility = "hidden";
        sectionRight.style.visibility = "hidden";
        sectionLeft.style.visibility = "visible";
        sectionLeft.innerHTML = openHeaderTag + captionTexts[photoNum-1] + closeHeaderTag + openInfoTag + infoTexts[photoNum-1] + closeInfoTag + clickMeTag;
    }
    else if(photoNum == 3 || photoNum == 8) {
        sectionMiddle.style.visibility = "visible";
        sectionLeft.style.visibility = "hidden";
        sectionRight.style.visibility = "hidden";
        sectionMiddle.innerHTML = openHeaderTag + captionTexts[photoNum-1] + closeHeaderTag + openInfoTag + infoTexts[photoNum-1] + closeInfoTag + clickMeTag;
    }
    else {
        sectionRight.style.visibility = "visible";
        sectionLeft.style.visibility = "hidden";
        sectionMiddle.style.visibility = "hidden";
        sectionRight.innerHTML = openHeaderTag + captionTexts[photoNum-1] + closeHeaderTag + openInfoTag + infoTexts[photoNum-1] + closeInfoTag + clickMeTag;
    }
}

function hideInfo(photoNum) {
        sectionLeft.style.visibility = "hidden";
        sectionMiddle.style.visibility = "hidden";
        sectionRight.style.visibility = "hidden";
}