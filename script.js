/* 
Archivo de Java Script que contiene un script (conjunto de líneas de código que normalmente) 
cambiar var(iable) a let
todos los scripts van arriba del nuesto
todos los css van arriba del nuestro
*/

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: false,
    deleteSpeed: 20,
    cursor: '|',
    cursorClassName: 'Typewriter__cursor',
    wrapperClassName:'Typewriter__wrapper',
    typeString: '|',
    changeDelay:20,
    string: true,
    autoStart: false
});

typewriter
.typeString('Me presento')
    .pauseFor(500)
    .deleteAll()
    .typeString('Soy Yunuen Olvera')
    .pauseFor(500)
    .deleteChars(13)
    .typeString('diseñadora gráfica jr')
    .pauseFor(500)
    .deleteChars(21)
    .typeString('fotógrafa')
    .pauseFor(500)
    .deleteChars(9)
    .typeString('#teamperros')
    .pauseFor(500)
    .start();
   