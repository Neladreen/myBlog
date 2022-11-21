document.addEventListener("DOMContentLoaded", () => {
    let slide = new Array("./assets/index.png", "./assets/pipeline.png", "./assets/rest.png");
    let numero = 0;

    function changeSlide(sens) {
        numero = numero + sens;
        if (numero < 0)
            numero = slide.length - 1;
        if (numero > slide.length - 1)
            numero = 0;
        document.getElementById("slide").src = slide[numero];
    }

    precedent.addEventListener('click', () => {
        changeSlide(-1)
    });

    suivant.addEventListener('click', () => {
        changeSlide(+1)
    })
});