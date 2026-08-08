fetch("facts.json");
let i = Math.floor(Math.random() * facts.length);
document.getElementById("factText").textContent = facts[i].factText;
document.getElementById("factImage").setAttribute("src", facts[i].imgsrc);
document.getElementById("imgCredit").textContent = facts[i].imgCredit; 
