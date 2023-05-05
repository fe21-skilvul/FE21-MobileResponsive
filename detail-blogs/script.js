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
    ).innerHTML += `<div class="container"><div class="row">
    <div class="card my-5" style="width: 70rem;">
  <div class="card-body mb-5">
    
    <h5 class="card-title text-center mt-3">${value.title}</h5>

    <a class="btn btn-success mb-2 disabled">${value.author}</a>
  
    <h5>${value.date}</h5>
   
    <img src="${value.image}" class="img-fluid h-50 w-100 mb-5" alt="...">
    <p class="card-text">${value.artikel}</p>
  </div>
</div>
</div>
</div>`;
    console.log(value);
  });
