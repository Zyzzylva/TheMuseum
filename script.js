fetch("facts.json")
    .then(response => response.json())
    .then(facts => {
        const element = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById("factImage").setAttribute("src", element.imgsrc);
        document.getElementById("factText").textContent = element.factText;
        document.getElementById("imgCredit").textContent = element.imgCredit;
    })
    .catch(error => {
        document.getElementById("factText").textContent = "Oh no! Could not fetch the fact :C";
    });
