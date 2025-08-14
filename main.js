"use strict"

console.log("Go");

const womenList = document.querySelector(".js-list");
const inputDesc = document.querySelector(".input-description");
const inputName = document.querySelector(".input-name");
const searchBtn = document.querySelector(".buttonSearch");
const toggleFormBtn = document.querySelector(".btn-add");
const formSection = document.querySelector(".form_section");
const addWomenBtn = formSection.querySelector(".js-add-btn");

let women = JSON.parse(localStorage.getItem("women")) || [
    {
        name: "Rosana",
        country: "España",
        desc: "Vocalista de la banda de Grindcore Encabronation. Guturales Death-Grind y algunos agudos. Ha colaborado en bandas como Vaginal Kebap y Morfina. Busca nuevos proyectos.",
        image: "https://pioneres.montypeiro.com/wp-content/uploads/2022/07/Rosana.jpg"
    },
    {
        name: "Sefi",
        country: "España",
        desc: "Vocalista de la banda de Black Metal Pestkraft. Es promotora de conciertos underground bajo la marca Hammer Agency. Hace agudos desgarradores, podría decirse que es la Onielar Valenciana.",
        image: "https://www.metal.de/images/2019/10/08/under-the-black-sun-2019-pestkraft-003-900x600.jpg"
    }
];

console.log(women);

//renderizar

function renderWomen (data) {
    womenList.innerHTML = "";

    data.forEach((women) => {
     womenList.innerHTML = womenList.innerHTML + `
    <li class="card">
    <article>
          <img class="card_img" src="${women.image}" alt="${women.name}" />
          <h3 class="card_title">${women.name}</h3>
          <p class="card_description">${women.desc}</p>
        </article>
      </li>`;
      });
    }

    //buscar
function handleSearch () {
    const descFilter = inputDesc.value.toLowerCase();
    const nameFilter = inputName.value.toLowerCase();

    const filtered = women.filter((women) => 
        women.desc.toLowerCase().includes(descFilter) &&
        women.name.toLowerCase().includes(nameFilter)
    );
    renderWomen(filtered);
}
    searchBtn.addEventListener("click", handleSearch);

    //Mostrar formulario
    toggleFormBtn.addEventListener("click", () => {
        formSection.classList.toggle("hidden");
        console.log(formSection.classList)
    });

    //Añadir nueva mujer
 addWomenBtn.addEventListener("click", () => {
    // event.preventDefault(); // importante si botón está en form
    const name = formSection.querySelector(".js-name").value.trim();
    const country = formSection.querySelector(".js-country").value.trim();
    const desc = formSection.querySelector(".js-desc").value.trim();
    const image = formSection.querySelector(".js-img").value.trim();

    if (name && country && desc && image) {
        const newWomen = { name, country, desc, image };
        women.push(newWomen);
        localStorage.setItem("women", JSON.stringify(women));
        renderWomen(women);
        formSection.classList.add("hidden");
        formSection.querySelectorAll("input").forEach((i) => (i.value = ""));
    }
    
});
console.log(formSection);


renderWomen(women);

const last = women.length -1
console.log(women[last]);

//GPT  2. Cambia tu JavaScript para usar estas clases
//Asegúrate de que cada imagen tenga la clase .woman-image y cada tarjeta tenga .card. Por ejemplo:
//js Copiar Editar

// const li = document.createElement("li");
// li.classList.add("card");

// const img = document.createElement("img");
// img.src = woman.image;
// img.alt = woman.name;
// img.classList.add("woman-image");

// li.appendChild(img);
// añade el resto de datos: name, country, etc.

