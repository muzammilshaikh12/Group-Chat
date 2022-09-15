// signup

function signup(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let password = document.getElementById("password").value;

  let obj = {
    name: name,
    email: email,
    number: number,
    password: password,
  };
  axios
    .post("http://localhost:3000/signup", obj)
    .then((result) => {
      if (result.status == 201) {
        alert("Successfully Signed up");
        window.location.href = "./login.html";
      } else {
        throw new Error("Failed to Signup");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// login
function login(event) {
  event.preventDefault();
  let email = document.getElementById("logemail").value;
  let password = document.getElementById("logpassword").value;

  let details = {
    email: email,
    password: password,
  };
  axios
    .post("http://localhost:3000/login", details)
    .then((response) => {
      if (response.status == 200) {
        console.log(response);
        alert("Successfully Logged in");
        localStorage.setItem("token", response.data.token);
        window.location.href = "./chat.html";
      } else {
        throw new Error("Failed to login");
      }
    })
    .catch((err) => alert(err.message));
}

// Sending a message

function sendmsg(event) {
  event.preventDefault();
  let message = document.getElementById("message").value;
  let obj = {
    message: message,
  };
  const token = localStorage.getItem("token");
  axios
    .post("http://localhost:3000/sendmsg", obj, {
      headers: { Authorization: token },
    })
    .then((response) => {
      alert("Message Sent");
    })
    .catch((err) => {
      console.log(err);
    });
}

// retrieving messages

window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  axios
    .get("http://localhost:3000/getmessages")
    .then((response) => {
      if (response.status == 200) {
        console.log(response)
        let inbox = document.getElementById('inbox')
        for (let i = 0; i < response.data.data.length; i++) {
          let message = response.data.data[i].message;
          let id = response.data.data[i].userId
         let content = `<div class="info"><span class="allmsgs">${id}</span><span class="allmsgs">${message}</span></div>`
         inbox.innerHTML += content
        }
      } else {
        throw new Error();
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
