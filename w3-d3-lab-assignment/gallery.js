const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image10.jpg"
];

const captionTexts = [
  "Sunset in Hawaii",
  "Forest Pathway",
  "Mountain Peaks",
  "City Lights",
  "Ocean Breeze",
  "Desert Dunes",
  "Cherry Blossoms",
  "Snowy Cabin",
  "Golden Field",
  "Lighthouse View"
];

const descTexts = [
  "A beautiful sunset over the Hawaiian coast.",
  "A quiet path through the deep forest.",
  "Snow-covered peaks under a bright sky.",
  "The city illuminated under the night sky.",
  "Waves gently crashing on the beach.",
  "Wind-sculpted dunes in the desert.",
  "Springtime in full bloom.",
  "A warm cabin surrounded by snow.",
  "Fields glowing under golden hour light.",
  "A lighthouse standing tall by the cliffs."
];

// HTML tag variables
const openListTag = '<li id="photo';
const closeListTag = '</li>';
const openImgTag = '<img src="';
const closeImgTag = '">';
const openCaptionTag = '<div class="caption">';
const closeCaptionTag = '</div>';
const openDescTag = '<div class="description">';
const closeDescTag = '</div>';

// Get the gallery container
const gallery = document.getElementById("gallery");

// Build gallery using loop
for (let i = 0; i < images.length; i++) {
  let html = 
  openListTag + (i + 1) + '">' +
    '<div class="img-box">' +
      openImgTag + images[i] + closeImgTag +
      openDescTag + descTexts[i] + closeDescTag +
    '</div>' +
    openCaptionTag + captionTexts[i] + closeCaptionTag +
  closeListTag;

  gallery.innerHTML += html;
}
