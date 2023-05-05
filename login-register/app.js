const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
  e.preventDefault();
  const fname = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("cpass").value;

  localStorage.setItem("FirstName", fname);

  localStorage.setItem("Email", email);
  localStorage.setItem("Password", pass);
  localStorage.setItem("Cpassword", cpass);
  if (fname == "" && email == "" && pass == "" && cpass == "") {
    Swal.fire("Opps..!", "input field harus diisi!", "error");
  } else {
    if (pass.length >= 6 && pass.length <= 20) {
      if (pass !== cpass) {
        Swal.fire("Opps..!", "Password tidak sama!", "error");
      } else {
        Swal.fire("Good job!", "Register berhasil!", "success");
        setTimeout(() => {
          location.href = "login.html";
        }, 1000);
      }
    } else {
      Swal.fire("Opps..!", "Input password mimimal enam digit !", "error");
    }
  }
};

// login function

const login = document.querySelector(".login");
login.onclick = (e) => {
  e.preventDefault();
  // cautch the valu which is type user login page
  const emailAddress = document.getElementById("emailAddress").value;
  const passWord = document.getElementById("passWord").value;

  // let's get value in localstorage which store user in registration field
  const Email = localStorage.getItem("Email");
  const Password = localStorage.getItem("Password");

  if (emailAddress == "" && passWord == "") {
    Swal.fire("Opps..!", "input field harus diisi!", "error");
  } else {
    if (emailAddress == Email && passWord == Password) {
      Swal.fire("Good job!", "login berhasil!", "success");
      setTimeout(() => {
        location.href = "../homepage/homepage.html";
      }, 1000);
    } else {
      Swal.fire(
        "Opps..!",
        "Email atau Password Salah. Silahkan coba lagi!",
        "error"
      );
    }
  }
};
