fetch("facts.json")
    .then(response => response.json())
    .then(facts => {
        const element = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById("factImage").setAttribute("src", element.imgsrc);
        document.getElementById("factText").textContent = `#${element.id}: ${element.factText}`;
        document.getElementById("imgCredit").textContent = element.imgCredit;
    })
    .catch(error => {
        document.getElementById("factText").textContent = "Oh no! Could not fetch the fact :C";
        document.getElementById("factImage").setAttribute("src", "https://pub-466b73cc39e6403888a1fb8b3fe03d15.r2.dev/IMG_8418.gif");
        document.getElementById("imgCredit").textContent = "Please take this bird for the inconvenience.";
    });
