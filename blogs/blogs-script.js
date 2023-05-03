const url = "https://643eaadb6c30feced82fb975.mockapi.io/comments";

fetch(url, {
  method: "GET",
})
  .then((response) => response.json())
  .then((value) => {
    for (let i = 0; i < value.length; i++) {
      document.getElementById(
        "blog-list"
      ).innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${value[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${value[i].title}</h5>
    <p class="card-text">${value[i].description}</p>
    <a href="${
      window.location.hostname + "blogs.html?id=" + value[i].id
    }" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
    }
    console.log(value);
  });
