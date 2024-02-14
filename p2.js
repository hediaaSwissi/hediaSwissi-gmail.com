let tab=["Amir","Aziz",12,"Rayen",15]
function afficher1(){
    document.getElementById("0").value=tab[0]
    document.getElementById("1").value=tab[1]
    document.getElementById("2").value=tab[2]
    document.getElementById("3").value=tab[3]
    document.getElementById("4").value=tab[4]
}
function afficher2(){
    p=tab.length;
    alert(p)
}
function afficher3(){
    
    for(i=0;i<=tab.length;i++){
       alert("hello"+" "+tab[i]) 
    }
    

}
function afficher4(){
    for(i=0;i<=tab.length;i++){
        if (typeof(tab[i])=="String"){
            alert("hello"+" "+tab[i])
        } 
        }
     }
