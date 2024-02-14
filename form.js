
alert('il y a un script JavaScript dans celle page !!');
let age =10;
age =20;
alert(age)

let nom = prompt("donner votre nom");
alert(nom)

console.log("bjr");
document.write("salut");
document.getElementById(age);
function mf(x){
    x.style.background="yellow";

}
function mf3(){
    let x=document.getElementById("n")
    x.value=x.value.toUpperCase()
}
function mf2(x){
    let x=document.getElementById("bns")
    x.style.color="yellow";
}

function mf4() {
    document.getElementById("co").style.color = "blue";
}
function mf5(){
    alert("vous avez clicker sur un touche de clavie");
}
function mf6(){
    document.getElementById("s").style.color="red";
}function mf7(){
    let x= document.getElementById("msg").value;
    document.getElementById("p01").innerHTML="vous avez écris :"+x;
}
function mf8(){
    let x=document.getElementById("aggge").value
    if (x>=1 && x<=2 ) {
        alert("bébé")
    }
    else if (x>=3 && x<=11){
        alert("enfant")
    }
    else if (x>=12&&x<=18){
        alert("adolescent")
    }
    else if (x>=19 && x<=60){
        alert ("adult")
    }
    else {
        alert ("vieux")
    }
}
function mf9(){
    let y=document.getElementById("af").value ;
    let i=0
    for (i=0;i<=y;i++){
        alert(i);
    } 
        
}
function mf10(){
    let w=document.getElementById("af").value ;
    let i=0
    for (i=0;i<=w;i++){
        if (i%2==0){
            alert(i); 
        }
    }
}
function mf11(){
    do {
        nb=prompt("donner un nb")}
    while (nb<0)
    let z=Math.sqrt(nb);
    document.getElementById("aa").value=z;

    
}
function mf12(){
    nbr=prompt("donner un nbr")
    let e=Math.abs(nbr);
    document.getElementById("a").value=e;
}
function mf13(){
    H=prompt("donner une chaine")
    let nb=H.length
    if (nb>=8){
        document.getElementById("aaa").value=H;
    }
}
function mf14(){
    C=prompt("donner un nbr")
    let c=Math.round(C);
    document.getElementById("ha").value=c;
}
function mf15(){
    g=prompt("donner un nbr")
    let n=Math.trunc(g);
    document.getElementById("hhea").value=n;
}
function mf16(){
    p=("donner un nbr")
    let x=Math.random(p);
    document.getElementById("y").value=x;
}
function mf17(){
    m=("donner un nbr")
    let s=Math.random(m)*10;
    document.getElementById("yo").value=s;
}
function mf18(){
    ch="Systèmes et technologies informatiques"
    P=prompt("donner l'indi")
    l=ch.charAt(P)
    alert(l)

}
function mf19(){
    ch="Systèmes et technologies informatiques"
    p=prompt("donner pre occur")
    y=ch.indexOf(p)
    alert(y)
}
function mf20(){
    ch="Systèmes et technologies informatiques"
    p=prompt("donner last ch ")
    y=ch.lastIndexOf(p)
    alert(y)
}
function mf21(){
    ch="Systèmes et technologies informatiques" 
    ch1=(ch.replace(/i/g,"t"))
    alert(ch1)
    
}
function mf22(){
    ch="Systèmes et technologies informatiques" 
    ch1=ch.toUpperCase()
    alert(ch1)

}
function mf23(){
    ch="Systèmes et technologies informatiques" 
    ch1=ch.toLowerCase()
    alert(ch1)

}
function mf24(){
    ch="Systèmes et technologies informatiques" 
    y=ch.trim()
    alert(y)

}
function mf25(){
    ch="Systèmes et technologies informatiques" 
    p0=prompt("donner premier caractère ")
    p1=prompt("donner la longueur ")
    x=ch.substr(p0,p1)
    alert(x)

}
function mf26(){
    ch="Systèmes et technologies informatiques" 
    P=prompt("donner la poition")
    w=ch.charCodeAt(P)
    alert(w)

}
function mf27(){
    x=String.fromCharCode(97,121,101,116,97,108,108,97,104)
    s=String.fromCharCode(72,65,77,65)
    alert(s)
    alert(x)
}
function mf28(){
    a=prompt("donner un nb")
    if (isNaN(a)==false){
        a=a**2
        alert(a)
        
    }
    else{
        alert("n'est pas un nombre")
    }
}
function mf29(){
    p=Number(prompt("donner une chaine"))
    x=p/2
    alert(x)
    
}
function mf30(){
    p=parseFloat(prompt("donner une chaine"))
    alert(p) 
}
function mf31(){
    p=parseInt(prompt("donner une chaine"))
    alert(p)
}
function mf32(){
    let n=15
    b=String(n)
    alert(typeof b)
}

function mf33(){
    let d=new Date()
    alert(d)
}
function mf34(){
    const au=new Date()
    let d=au.getDate()
    let m=au.getMonth()
    let y=au.getFullYear()
document.getElementById("z0").innerHTML=d;
document.getElementById("z1").innerHTML=m;
document.getElementById("z2").innerHTML=y;
}
function mf35(){
    
}