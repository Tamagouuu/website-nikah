const url =
  "https://script.googleusercontent.com/macros/echo?user_content_key=S1QLM2jFCK5K1fZDleY8cQucE4ZvJ44eyyYQIkx2h-L_IxGnypXjeaeG4hnA12bfijqBvKSM9AEMUzfa0gz__NGmPU6JkrT8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDKBGPRyCERUhrNvBLE_vI2yf5xa67PjQRYQDOhZ_4SyL7VwKS3eeoLwYhAKqpow5c3jCVF_JdC15C13WLs7us0bBZmdxEO81tz9Jw9Md8uu&lib=MsW59pOlHEHYIZnQl7KkJZD5VydodrvMG";

const btnSubmit = document.querySelector("button");

fetchMessage();

btnSubmit.addEventListener("click", () => {
  console.log("ok");
});

function fetchMessage() {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      maker(data);
    });
}

function maker(data) {
  const container = document.querySelector("#message-box");
  let content = "";
  data.forEach((message) => {
    content += `<div class="col-lg-7 col-md-10 col-12">
              <div class="bubble-message d-flex align-items-center mb-3">
                <div class="user-photo me-4">
                  <img src="assets/img/user-icon.svg" width="50px" />
                </div>
                <div class="message ms-1">
                  <p class="fw-bolder">${message.nama}</p>
                  <p>${message.pesan}</p>
                </div>
              </div>
            </div>`;
  });
  container.innerHTML = content;
}
