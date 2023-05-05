const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log(queryString);
const url = "https://64527065a2860c9ed40c6783.mockapi.io/comments/" + id;

fetch(url, {
  method: "GET",
})
  .then((response) => response.json())
  .then((value) => {
    document.getElementById(
      "blog"
    ).innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${value.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${value.title}</h5>
    <p class="card-text">${value.artikel}</p>
  </div>
</div>`;
    console.log(value);
  });
