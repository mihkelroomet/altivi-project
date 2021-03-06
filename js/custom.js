let curPic = 1;

function openModal() {document.getElementById("modal").style.display = "block"}

function closeModal() {document.getElementById("modal").style.display = "none"}

function showPic(p) {
    const bigPics = document.getElementsByClassName("enlarged-gallery-image");
    if (p < 0) {p = bigPics.length - 1}
    else if (p > bigPics.length - 1) {p = 0}
    for (i = 0; i < bigPics.length; i++) {bigPics[i].style.display = "none"}
    bigPics[p].style.display = "block";
    curPic = p;
}

function initMap() {
    const vanaKangro = { lat: 58.532072, lng: 23.095684 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: vanaKangro,
    });
    const marker = new google.maps.Marker({
        position: vanaKangro,
        map: map,
    });
}

function displayPage(p) {
    for (i = 0; i < pages.length; i++) {pages[i].style.display = "none"}
    if (p > -1) {pages[p].style.display = startingPageDisplay}
    else {pages[pages.length + p].style.display = startingPageDisplay}
}

const pages = document.getElementsByClassName("page");
const startingPageDisplay = pages[0].style.display;
displayPage(0);
initMap();