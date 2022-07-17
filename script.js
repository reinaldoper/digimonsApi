/* const fetch = require('node-fetch'); */
const input = document.querySelector('#buton');
const p = document.querySelector('p');
const imgDig = document.querySelector('.image');
const nome = document.querySelector('#nome');
const requestDigimon = async () => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        const result = await response.json();
        return result;
    } catch (error) {
        alert(error.toString());
    }
}
const result = async ({ target }) => {
    const digimon = await requestDigimon();
        const value = target.value;
        console.log(value);
        const find = digimon.find(({ name }) => name.toLowerCase() === value.toLowerCase());
        const { name, level, img } = find;
        nome.innerHTML = name;
        imgDig.src = img;
        p.innerHTML = level;
}
const requestNameDigimon = async () => {
    input.addEventListener('change', result); 
}
window.onload = requestNameDigimon();

