let sonicPos = 1;

let knucklesPos= 1;

let eggmanPos=1;
let eggman2=document.getElementById("eggman");
let sonic2=document.getElementById("sonic");
let knuckles2=document.getElementById("knuckles");

const start =() => {
    let start2=document.getElementById("start");
start2.style.display= "none";
// start2.style.opacity = '0';
eggman2.style.display= "block";
sonic2.style.display= "block";
knuckles2.style.display= 'block';

}

// const addOne =()=>{

// eggmanPos++;

// eggman2.style.marginleft= eggmanPos+'vw';

// if(eggmanPos==100 && sonicPos <100 && knucklesPos <100){if (confirm('you both let eggman get away!!!)')){location.reload();}}

// }

// for(i=1;i<=100;i ++){

// window.setInterval(addOne(), 500);

// }




document.addEventListener('keydown',()=>{

    if(event.keyCode==83){
console.log('oof')
sonicPos+=1;

sonic2.style.marginLeft= sonicPos+'vw' ;

if (sonicPos==100){

if (confirm("Sonic has won the race!!")){location.reload();}

}

    }})




// const knuckles =()=>{



// knucklesPos+=1;

// knuckles2.style.marginLeft= knucklesPos+'vw' ;

// if (knucklesPos==100){

// if (confirm("Knuckles has won the game!!")){location.reload();}

// }

// }


document.addEventListener('keydown',()=>{


    if(event.keyCode==75){
    knucklesPos+=1;
    
    knuckles2.style.marginLeft= knucklesPos+'vw' ;
    
    if (knucklesPos==100){
    
    if (confirm("Knuckles has won the game!!")){location.reload();}
    
    }
    
        }})