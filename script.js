fetch("facts.json")
  .then((response) => response.json())
  .then((facts) => {
    const list = document.querySelector("#starred");
    facts.forEach((fact) => {
      const factText = document.createElement("p");
      factText.textContent = `${fact.fact} — cr ${fact.imgcredit}`;
      const factImg = document.createElement("img");
      factImg.setAttribute("imgsrc", fact.imgsrc);
      list.appendChild(item);
    });
  });
