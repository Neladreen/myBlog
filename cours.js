document.addEventListener("DOMContentLoaded", () => {
    const vignette=document.getElementsByClassName('cours-disponibles-vignettes')
    let compteur= 0;
    const nombre=document.getElementsByClassName('compteur');

    Array.from(vignette).forEach(cours => {
        cours.addEventListener('click', () => {
            cours.classList.toggle("selected");
            compteur = document.getElementsByClassName('selected').length;
            console.log(compteur);
            nombre.innerHTML=compteur;
        });
    });
    


    // function comptage() {
    // compteur++;
    // document.getElementById("nombreClics").textContent   = nombreClics;
    // }

    // document.getElementById("boutonClic").addEventListener("click", comptage);

    // document.getElementById("desactiver").addEventListener("click", function(e) {
    //     document.getElementById("boutonClic").removeEventListener("click", comptage);
    // });
});