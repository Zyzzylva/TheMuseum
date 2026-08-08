fetch("facts.json");
let i = Math.floor(Math.random() * facts.length);
document.getElementById("factText").textContent = facts[i].factText;
document.getElementById("factImage").setAttribute("src","https://inaturalist-open-data.s3.amazonaws.com/photos/171151444/large.jpeg");
document.getElementById("imgCredit").textContent = "this phto is by sloog :)"; 
