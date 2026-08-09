fetch("testing.json")
    .then(response => response.json())
    .then(testing => {
        const element = testing[Math.floor(Math.random() * testing.length)];
        document.getElementById("factImage").setAttribute("src", "");
        document.getElementById("factText").textContent = "i have replaced the text";
    })
    .catch(error => {
        document.getElementById("factText").textContent = "Oh no! Could not fetch the fact :C";
    });
