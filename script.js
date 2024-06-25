/* 
Archivo de Java Script que contiene un script (conjunto de líneas de código que normalmente) 
cambiar var(iable) a let
todos los scripts van arriba del nuesto
todos los css van arriba del nuestro
se puede agregar otro, solo hay que cambiar el app
*/





let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: false,
    deleteSpeed: 20,
    delay: 80,
    cursor: '|',
    cursorClassName: 'Typewriter__cursor',
    wrapperClassName: 'Typewriter__wrapper',
    typeString: '|',
    changeDelay: 20,
    string: true,
    autoStart: false
});

typewriter
    .pauseFor(1000)
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
    .deleteChars(11)
    .typeString('Yunuen Olvera')
    .pauseFor(500)
    .start();

let description1 = document.getElementById('description1');

let typewriterDescription1 = new Typewriter(description1, {
    loop: false,
    deleteSpeed: 20,
    delay: 80,
    cursor: '|',
    cursorClassName: 'Typewriter__cursor',
    wrapperClassName: 'Typewriter__wrapper',
    typeString: '|',
    changeDelay: 20,
    string: true,
    autoStart: false
});

typewriterDescription1
    .pauseFor(13000)
    .typeString('¡Bienvenidx! Me apasiona el diseño gráfico, la fotografía, la ingeniería en papel, la creación de marcas y el desarrollo web.')
    .pauseFor(500)
    .start();

let description2 = document.getElementById('description2');

let typewriterDescription2 = new Typewriter(description2, {
    loop: false,
    deleteSpeed: 20,
    delay: 80,
    cursor: '|',
    cursorClassName: 'Typewriter__cursor',
    wrapperClassName: 'Typewriter__wrapper',
    typeString: '|',
    changeDelay: 20,
    string: true,
    autoStart: false
});

typewriterDescription2
    .pauseFor(24000)
    .typeString('Adoro a los perros, perderme en un buen libro y escuchar música de los 80s.')
    .pauseFor(500)
    .start();

let description3 = document.getElementById('description3');

let typewriterDescription3 = new Typewriter(description3, {
    loop: false,
    deleteSpeed: 20,
    delay: 80,
    cursor: '|',
    cursorClassName: 'Typewriter__cursor',
    wrapperClassName: 'Typewriter__wrapper',
    typeString: '|',
    changeDelay: 20,
    string: true,
    autoStart: false
});

typewriterDescription3
    .pauseFor(31000)
    .typeString('Conoce mi mundo creativo, donde cada proyecto es una aventura única.')
    .pauseFor(500)
    .start();

// Termina efectos header

