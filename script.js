var videoURLs = {
  'Transparency': 'https://makertube.net/videos/embed/88faa14d-c663-4695-9f0e-5bdf5185a327',
  'Trust': 'https://makertube.net/videos/embed/67ffbc48-a118-4b35-b874-a116ca2d5aa2',
  'Visibility': 'https://makertube.net/videos/embed/a7c25310-315b-4163-a54d-7d29b3c0b309',
  'Self-Surveillance': 'https://makertube.net/videos/embed/b6dae37d-054a-4724-966b-d345ad322188',
  'Commercial': 'https://makertube.net/videos/embed/f3c00840-6e4c-4157-9f24-ca702621f4de'
};

function showPopup(title, content) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-content").innerHTML = content;
  document.querySelector(".popup").style.display = "block";
  document.querySelector(".overlay").style.display = "block";
  document.getElementById("video-buttons").style.display = "none";
  document.getElementById("video-container").style.display = "none"; 


}

function showVideoPopup(title) {
  document.getElementById("popup-content").innerHTML = ''; 
  document.getElementById("popup-title").textContent = title;
  if (title === 'Field Research') {
    showVideoTab('Transparency');
    document.getElementById("video-buttons").style.display = "flex"; 
    document.getElementById("video-container").style.display = "flex"; 

  } else {
    document.getElementById("video-buttons").style.display = "none"; 

  }
  document.querySelector(".popup").style.display = "block";
  document.querySelector(".overlay").style.display = "block";
}

function showVideoTab(tabName) {
  if (document.getElementById("popup-title").textContent === 'Field Research') {
    var videoURL = videoURLs[tabName];
    var embed = document.createElement('embed');
    embed.type = "video/webm";
    embed.src = videoURL;
    embed.width = "800";
    embed.height = "444";
    document.getElementById("video-container").innerHTML = '';
    document.getElementById("video-container").appendChild(embed);
  }
}


function hidePopup() {
  var videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = ''; 

  document.querySelector(".popup").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
}


function changeImage(imageSrc) {
  document.getElementById("image").src = imageSrc;
}

function keepImage() {
}

function resetImage() {
  if (!isMouseOverImage) {
    document.getElementById("image").src = "images/cam/cam4.png"; 
  }
}

var isMouseOverImage = false;

document.querySelector(".container").addEventListener("mouseenter", function() {
  isMouseOverImage = true;
});

document.querySelector(".container").addEventListener("mouseleave", function() {
  isMouseOverImage = false;
  resetImage();
});

document.querySelector(".circle").addEventListener("mouseenter", function() {
  isMouseOverImage = true;
});

document.querySelector(".circle").addEventListener("mouseleave", function() {
  isMouseOverImage = false;
  resetImage();
});

document.addEventListener("mouseleave", function() {
  isMouseOverImage = false;
  resetImage();
});