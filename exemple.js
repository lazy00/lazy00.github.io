console.log("mon javascript est chargé et il fonctionne");
let moving = true;

setTimeout(function(){
    setinterval(function(){
        document.queryselector("h1").style.color="#00FF00";
        if(moving)document.queryselector("h1").style.top="100px";
    },1500);
},2000);

setinterval(function(){
    document.queryselector("h1").style.color="red";
    if(moving)document.queryselector("h1").style.top="300px";
},1500);

function clickOnMyH1(){

    moving = !moving;
    fetch('https://swapi.co/api/people/' + parseint(math.random()*50+1))
.then(function(response){
    return response.json();
})
.then(function(myJson){
    textcontect="good to see you
})
}

document.queryselector("h1").addEventListner("mouseleave",function(){
    document.queryselector("h1").textcontent="ne me quitte pas..."
});

