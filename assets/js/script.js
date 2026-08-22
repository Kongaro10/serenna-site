/* ==========================================
   SERENNA
   script.js
========================================== */

// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", () => {

    menuAtivo();

    scrollSuave();

});



/*=========================================
MENU ATIVO
=========================================*/

function menuAtivo() {

    const pagina = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll(".menu a");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (href === pagina) {

            link.classList.add("active");

        }

    });

}



/*=========================================
SCROLL SUAVE
=========================================*/

function scrollSuave() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (!destino) return;

            e.preventDefault();

            destino.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

}



/*=========================================
FORMATAR MOEDA
=========================================*/

function formatarPreco(valor){

    return valor.toLocaleString("pt-BR",{

        style:"currency",

        currency:"BRL"

    });

}