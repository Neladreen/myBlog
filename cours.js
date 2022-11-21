document.addEventListener("DOMContentLoaded", () => {
    const vignette=document.getElementsByClassName('cours-disponibles-vignettes')
    let compteur= 0;
    const nombre=document.getElementsByClassName('compteur')[0];

    Array.from(vignette).forEach(cours => {
        cours.addEventListener('click', () => {
            cours.classList.toggle("selected");
            compteur = document.getElementsByClassName('selected').length;
            nombre.textContent=compteur;
        });
    });

    Array.from(vignette).forEach(cours => {
        poubelle.addEventListener('click', () => {
            cours.classList.remove("selected");            compteur = document.getElementsByClassName('selected').length;
            nombre.innerHTML=compteur;
        });
    });
});