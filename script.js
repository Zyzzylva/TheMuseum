fetch("facts.json")
  .then((response) => response.json());
let i = Math.floor(Math.random() * facts.length);
document.getElementById("factText").textContent = "I have repalced the text";
document.getElementById("factImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Three_populations_of_Chrysomallon_squamiferum.jpg/1280px-Three_populations_of_Chrysomallon_squamiferum.jpg");
document.getElementById("imgCredit").textContent = facts[i].imgCredit; 
