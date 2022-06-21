"user strict"

console.info(window.location.search);
var text=window.location.search.split("=");
var id=text[1];


fetch("https://pokeapi.co/api/v2/pokemon/"+id+"/")
    .then(data=>data.json())
    .then(data=>{
        console.info(data);
    })