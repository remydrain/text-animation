const container = document.querySelector('.container');
const careers = ['developer', 'analyst', 'photographer'];

let careerInd = 0;
let characterInd = 0;

updateText();

function updateText() {
    characterInd++;
    container.innerHTML = `<h1>I am ${careers[careerInd].slice(0,1) === 'a' ? 'an' : 'a'} ${careers[careerInd].slice(0, characterInd)}</h1>`;
    if(characterInd === careers[careerInd].length) {
        careerInd++;
        characterInd = 0;
    }
    if (careerInd === careers.length) {
        careerInd = 0;
    }
    setTimeout(updateText, 400);
}