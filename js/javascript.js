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

eggmanMove()
       
}



const sonic=()=>{ if(sonic2.style.display=='block'){
    sonicPos+=3;sonic2.style.marginLeft= sonicPos+'vw' ; if (sonicPos>=100){
    if (confirm("Sonic has won the race!!")){location.reload();}
    }}}
    
    
    const knuckles=()=>{if(knuckles2.style.display=='block'){
         knucklesPos+=3;knuckles2.style.marginLeft= knucklesPos+'vw' ;if (knucklesPos>=100)
    {if (confirm("Knuckles has won the game!!")){location.reload();}
    }}}



const addOne =()=>{
eggmanPos+=1;

eggman2.style.marginLeft= eggmanPos+'vw';

if(eggmanPos>=100 && sonicPos <100 && knucklesPos <100){
    if (confirm('you both let eggman get away!!!)')){
        location.reload();
    }
}

}






document.addEventListener('keydown',()=>{
        if(sonic2.style.display=='block'){
            if(event.keyCode==83){
                sonicPos+=3;
                sonic2.style.marginLeft= sonicPos+'vw' ;
                    if (sonicPos>=100){

                            if (confirm("Sonic has won the race!!")){location.reload();}
                  }
           }
        }
})


document.addEventListener('keydown',()=>{

if(knuckles2.style.display=='block'){
    if(event.keyCode==75){
    knucklesPos+=3;
    
    knuckles2.style.marginLeft= knucklesPos+'vw' ;
    
    if (knucklesPos>=100){
    
    if (confirm("Knuckles has won the game!!")){location.reload();}
    
    }
    
 }}})

eggmanMove=()=>{    window.setInterval(addOne, 100);}

