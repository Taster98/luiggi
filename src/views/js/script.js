// Testo da digitare
const textToType = `Hello, friend! 
I am Luiggi
I am a Software Engineer with an NP-Hard problem to resist to kittens.
In my free time i love to discover the best food tastes all around! 
Also, I like to put easter eggs everywhere so, have fun on finding 'em all!`;

// testo con html per easter eggz
const htmlToType = `Hello, <span style="" onclick="changeColor()">friend!</span> <br>
I am Luiggi <br>
I am a Software Engineer with an NP-Hard problem to resist to <span ondblclick="kitten()"> kittens</span>. <br>
In my free <span onclick="science()">time</span> i love to discover the best food tastes all around! <br>
Also, I like to put easter eggs everywhere so, have fun on finding 'em all!`;

// Funzione per simulare l'effetto di digitazione
function typeEffect(text, index, callback) {
    if (index < text.length) {
        // Aggiungi il prossimo carattere al paragrafo
        document.getElementById('typing-effect').innerText = text.substring(0, index);
        // Richiama la funzione dopo un intervallo casuale
        setTimeout(() => {
            typeEffect(text, index + 1, callback);
        }, Math.random() * 100);
    } else {
        // Se il testo è stato completamente digitato, chiama la callback
        if (typeof callback === 'function') {
            callback();
        }
    }
}

// Avvia l'effetto di digitazione quando la pagina è pronta
document.addEventListener('DOMContentLoaded', () => {
    typeEffect(textToType, 0, () => {
        document.getElementById('typing-effect').innerHTML = htmlToType;
    });
    
});

function changeColor(){
    document.getElementById('typing-effect').style.color = document.getElementById('typing-effect').style.color === 'darkgreen' ? 'white' : 'darkgreen';
}

function science(){
    window.open('https://www.youtube.com/watch?v=uD4izuDMUQA','_blank');
}

function kitten(){
    let audio = new Audio('audio/Cats-loud-meow-sound-clip.mp3');
    audio.play();
}