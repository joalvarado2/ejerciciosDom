const d = document;

export default function searchFilters(input, selector) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      //console.log(e.key)
     // if (e.key === "Escape") e.target.value = "";

      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}

console.log("hola mundo en diferentes lenguajes")
console.log("Hola mundo");
console.log("Hello world");
console.log("salut monde");
console.log("Hallo Welt");
