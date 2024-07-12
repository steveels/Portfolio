
const clr1 = document.getElementById("clr1");
const clr2= document.getElementById("clr2");
const r = document.getElementById("r");
const bg = document.getElementById("bg");
const code = document.getElementById("code");
const code2 = document.getElementById("code2");
const btn = document.getElementById("btn");
const copy = document.getElementById("copy");
const ort = document.getElementById("degre");



clr1.addEventListener("input",bgset);
clr2.addEventListener("input",bgset);
r.addEventListener("input",bgset);
btn.addEventListener("click",rdm);
copy.addEventListener("click",cp);



function bgset() {
  bg.style.background =`linear-gradient(${r.value}deg,${clr1.value},${clr2.value})`;
  code.textContent =`${clr1.value}`;
  code2.textContent =` ${clr2.value}`;
  degre.textContent =`Orientation : ${r.value}°`;
 
  
};


function rdm () {
    clr1.value = randomColor();
    clr2.value = randomColor();
    bgset();
    
 
};

function cp() {
    
    let cpy = `linear-gradient(${r.value}deg,${clr1.value},${clr2.value})`;
    navigator.clipboard.writeText(cpy);
    copy.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function () {
        copy.classList.remove("active");
    },1500);
}