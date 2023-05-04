const url = "https://64527065a2860c9ed40c6783.mockapi.io/comments";

fetch(url, {
  method: "GET",
})
  .then((response) => response.json())
  .then((value) => {
    for (let i = 5; i < value.length; i++) {
      document.getElementById(
        "blog-list"
      ).innerHTML += `<div class="container mt-5 container-blogs">
      <div class="card">
          <div class="row no-gutters">
              <div class="col-md-4">
                  <img class="card-img-top" src="${value[i].avatar}" alt="">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title">${value[i].title}</h5>
                      <p class="card-text">
                          <span class="badge bg-success">Lorem, ipsum dolor.</span>
                      </p>
                      <p class="card-text">${value[i].description}</p>
                      <p class="card-text float-end">
                          <small class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing.</small>
                      </p>
                      
                      <div class="clearfix"></div>
                      <a href="${
                        window.location.hostname +
                        "detail-blogs.html?id=" +
                        value[i].id
                      }" class="btn btn-success w-100">Lihat Selengkapnya</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
      `;
    }
    console.log(value);
  });
//   <div class="card" style="width: 18rem;">
//   <img src="${value[i].image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${value[i].title}</h5>
//     <p class="card-text">${value[i].description}</p>
//     <a href="${
//       window.location.hostname + "detail-blogs.html?id=" + value[i].id
//     }" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
