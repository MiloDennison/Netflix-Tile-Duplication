function randomColor() {
    let nucleus = "";
    
    for (let i = 0; i < 6; i++){
        nucleus += Math.floor(Math.random() * 16).toString(16);
        console.log(nucleus);
    }

    console.log("nucleus");

    return nucleus;
}

function initiate(){
    let tiles = document.getElementsByClassName("tile");
    let color;

    for (let i = 0; i < tiles.length; i++) {
        //console.log(tiles.item(i).id.valueOf);
        color = '#' + randomColor();
        //console.log(color.valueOf);
        tiles.item(i).style.backgroundColor = `${color}`;
    }
}
