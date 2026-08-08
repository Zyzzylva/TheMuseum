fetch("testing.json")
  .then(response => response.json())
  .then(facts => {
    let i = Math.floor(Math.random() * testing.length);
    document.getElementById("factText").textContent = "I have repalced the text";
    document.getElementById("factImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Three_populations_of_Chrysomallon_squamiferum.jpg/1280px-Three_populations_of_Chrysomallon_squamiferum.jpg");
    document.getElementById("imgCredit").textContent = testing[i]; 
  });
