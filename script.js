const toggle = document.querySelector('#toggle');
const randomColor = document.querySelector(".randomize");
const textColor = document.querySelector("#color");
const background = document.querySelector(".container");
let RGB = true

randomColor.onclick = () => {
    if (RGB) {
        let rgb = generateRGBRandom();
        textColor.innerText = rgb.r+", "+rgb.g+", "+rgb.b;
        background.style.backgroundColor = "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
    } else {
        let hex = generarHexRandomico();
        textColor.innerText = hex;
        background.style.backgroundColor = hex;
    }
};

toggle.onclick = () =>{
    toggle.classList.toggle('active');
    RGB = !RGB;
    if(RGB){
        let hex = textColor.innerText;
        let rgb = hexToRGB(hex);
        textColor.innerText = rgb.r+", "+rgb.g+", "+rgb.b;
    } else {
        let rgb = textColor.innerText;
        let hex = RGBToHex(rgb);
        textColor.innerText = hex.toUpperCase();
    }
};

function generateRGBRandom() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = {r:r,g:g,b:b};
    return rgb
}

function generarHexRandomico() {
    let letrasHex = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += letrasHex[Math.floor(Math.random() * 16)];
    }
    return hex;
}

function hexToRGB(hex) {
    // Remover el símbolo '#' si está presente
    hex = hex.replace('#', '');
    // Extraer los componentes R, G y B
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    let rgb = {r:r,g:g,b:b};
    return rgb
}

function RGBToHex(rgb) {
    let rgbArray = rgb.split(',');
    let r = parseInt(rgbArray[0], 10).toString(16).padStart(2, '0');
    let g = parseInt(rgbArray[1], 10).toString(16).padStart(2, '0');
    let b = parseInt(rgbArray[2], 10).toString(16).padStart(2, '0');
    let hex = '#' + r + g + b;
    return hex;
}