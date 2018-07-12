function contador(){
    for(var i = 0; i <= 7; i++){
    document.getElementById('cont').innerHTML = i;
    }
    setTimeout(contador(),7000);
}
contador();
/*var cont = 7;
function contador() {
    document.getElementById('cont').innerHTML=cont;
    if(cont != 0){
        cont -= 1;
        setTimeout(contador(), 17000);
    }
}
contador();*/

/*
var milisec=0;
var seconds=30; 
document.getElementById("cont").innerHTML = '30';

function display(){ 
    if (milisec<=0){ 
        milisec=9 
        seconds-=1 
    } 
    if (seconds<=-1){ 
        milisec=0 
        seconds+=1 
    } 
    else 
        milisec-=1 
        document.getElementById("cont").innerHTML = seconds+"."+milisec;
        setTimeout("display()",100) 
    } 
display() ;*/