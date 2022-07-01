"user strict";

//console.info(window.location.search);
var text=window.location.search.split("=");
var id=text[1];
const contentImage=document.getElementById("imgPok");
var validImages=[];

fetch("https://pokeapi.co/api/v2/pokemon/" + id + "/")
    .then((data) => data.json())
    .then((data) => {
        //console.info(data)
        buildSpritesPok(data.sprites);//informacion de sprites
    });


function buildSpritesPok(images){
    //info externa
    for(const property in images){
        //info interna
        var url=property.toString();
        if(property=="versions" || property=="other"){
            break;
        }else{
            if(images[property]!==null && typeof images[property]!=="undefined"){
                validImages.push(images[url]);
            }
        }
        
    }
    //console.info(validImages);
    viewSpritesPok()

}

function viewSpritesPok(){
    var flag=0;
    setInterval(function(){
        contentImage.setAttribute('src',validImages[flag]);
        console.info(flag);
        if(flag===validImages.length-1){
            flag=0;
        }else{
            flag+=1;
        }

    },1000)
}