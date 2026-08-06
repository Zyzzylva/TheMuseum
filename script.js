fetch("facts.json")
  .then((response) => response.json())
  .then((events) => {
    const list = document.querySelector("#starred");
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.fact} — cr ${event.imgcredit}`;
      list.appendChild(item);
    });
  });
