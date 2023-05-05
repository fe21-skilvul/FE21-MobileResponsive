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
    document.getElementById("blog").innerHTML += `
   
   
    <div class="container"><div class="row"><div class="card my-5" style="width: 80rem;">
  <div class="card-body">
  <h5 class="card-title text-center my-5">${value.title}</h5>
  <img src="${value.image}" class="img-fluid h-50 w-100 mb-5" alt="...">
   
    <p class="card-text">${value.artikel}</p>
  </div>
</div>
</div>
</div>`;
    console.log(value);
  });
