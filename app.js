let image = document.querySelector("#image");
let result = document.querySelector("#result");
let masjid = 0;
let chand = 1;
function toss() {
    let randamNum = Math.floor(Math.random() * 2);
    if (randamNum == masjid) {
        result.innerHTML = "Win the toss of Masjid";
        image.src = "https://en.numista.com/catalogue/photos/pakistan/432-original.jpg";
    } else if (randamNum == chand) {
        result.innerHTML = "Win the toss of Chand";
        image.src = "https://en.numista.com/catalogue/photos/pakistan/431-original.jpg";
    }
}



















