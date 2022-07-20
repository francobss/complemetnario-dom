// Titulo
let contTitulo = document.createElement("div");
contTitulo.setAttribute("id", "cont-titulo");
let titulo = document.createElement("h1");
titulo.innerHTML = "Distintas razas de perros.";
document.body.append(contTitulo)
contTitulo.append(titulo)
titulo.className = "titulo borde"
titulo.style.backgroundColor = "rgb(213, 216, 220)"

// array del tipo de perros
const razasPerros = [
    {
        nombre: "Rottwailer",
        region: "Alemania",
        tipo: "canino",
        img: "./imgperros/Rottweiler4.webp"
    },
    {
        nombre: "Pit Bull Terrier Americano",
        region: "Estados Unidos/Reino Unido",
        tipo: "canino",
        img: "./imgperros/pittbull.webp"
    },
    {
        nombre: "Dogo Argentino",
        region: "Argentina",
        tipo: "canino",
        img: "./imgperros/Dogo_argentino_sylwetka.jpg"
    },
    {
        nombre: "Pastor alemán",
        region: "Alemania",
        tipo: "canino",
        img: "./imgperros/Cane_da_pastore_tedesco_adulto.jpg"
    },
    {
        nombre: "Husky siberiano",
        region: "Rusia",
        tipo: "canino",
        img: "./imgperros/Siberian-husky.webp"
    },
    {
        nombre: "Golden retriever",
        region: "Escocia",
        tipo: "canino",
        img: "./imgperros/Golden_Retriever_9-year_old.jpg"
    }
]

let contRazas = document.createElement("div");
contRazas.setAttribute("id", "cont-razas");
document.body.append(contRazas)
contRazas.className = "alinear"

function printearRazas(){
    let cuerpo = document.getElementById("cont-razas");
    
    razasPerros.forEach((e)=>{
        let perros = `
        <div class="card" style="width: 18rem;">
        <img src="${e.img}" class="card-img-top img" alt="...">
        <div class="card-body">
            <h5 class="card-title">${e.nombre}</h5>
            <p class="card-text">"Region: "${e.region}</p>
            
        </div>
        </div>
        `
        cuerpo.innerHTML += perros
    });
}

printearRazas();

