fetch("facts.json")
    .then(response => response.json())
    .then(facts => {
        const element = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById("imgCredit").textContent = element.imgCredit;
        document.getElementById("factText").innerHTML = `#${element.id}: ${element.factText}`;
        document.getElementById("factImage").setAttribute("src", element.imgsrc);
    })
