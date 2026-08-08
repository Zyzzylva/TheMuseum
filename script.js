fetch("facts.json")
    .then(response => response.json())
    .then(facts => {
        const element = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById("imgCredit").textContent = "i have replaced the text";
        document.getElementById("factText").innerHTML = element.factText;
        document.getElementById("factImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Three_populations_of_Chrysomallon_squamiferum.jpg/1280px-Three_populations_of_Chrysomallon_squamiferum.jpg");
    })
