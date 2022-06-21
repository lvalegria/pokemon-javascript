"use strict"

//capturar el id

var contenedor=document.getElementById("resultados");
var textDiv="";

window.addEventListener("load", function(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=40&offset=0")
    .then(data => data.json())
    .then(data => {
        //console.info(data);
        data.results.map((pokemon,i)=>{
            addPokemon(pokemon.url);
        })
    })
});

//caracteristicas de los pokemones
function addPokemon(url) {
    fetch(url)
        .then(data=>data.json())
        .then(data=>{
            mostrarPokemon(data);
        })
};

//mostrar los pokemones

function mostrarPokemon(pokemon){
    textDiv+='<div class="col-md-3"><div class="card"><img class="card-img-top" src="'+pokemon.sprites.front_default+'" alt="Card image"><div class="card-body"><h4 class="card-title">'+pokemon.name+'</h4><p class="card-text">Ejemplo de texto</p><a href="perfil.php?id='+pokemon.id+'" class="btn btn-primary">Ver pokemon</a></div></div></div>';
    contenedor.innerHTML=textDiv;
}

//<div class="col-md-4"><div class="card"><img class="card-img-top"src="'+pokemon.sprites.front_default+'" alt="Card image"