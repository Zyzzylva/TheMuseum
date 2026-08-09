fetch("facts.json")
    .then(response => response.json())
    .then(facts => {
        const element = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById("factImage").setAttribute("src", element.imgsrc);
    });
