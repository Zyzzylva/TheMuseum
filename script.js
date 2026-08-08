fetch("testing.json")
    .then(response => response.json())
    .then(testing => {
        const element = testing[Math.floor(Math.random() * testing.length)];
        document.getElementById("imgCredit").textContent = element;
    })
    let i = Math.floor(Math.random() * testing.length);
    document.getElementById("factText").textContent = "I have repalced the text";
    document.getElementById("factImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Three_populations_of_Chrysomallon_squamiferum.jpg/1280px-Three_populations_of_Chrysomallon_squamiferum.jpg");
    const testMake = document.createElement("p");
    testMake.textContent = "i have made and appended an element :)";
    document.getElementById("header").appendChild(testMake);
