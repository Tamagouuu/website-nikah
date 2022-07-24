const scriptURLPost = "https://script.google.com/macros/s/AKfycbwzglfQcqwTZlCRClA656ks4OpLt98XKhuPRIunzbi77f6Ci98pFtpONHGd5sugykNz/exec";
const form = document.forms["titip-pesan"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert-warning");
const container = document.querySelector("#message-box");
const scriptURLGet =
  "https://script.googleusercontent.com/macros/echo?user_content_key=S1QLM2jFCK5K1fZDleY8cQucE4ZvJ44eyyYQIkx2h-L_IxGnypXjeaeG4hnA12bfijqBvKSM9AEMUzfa0gz__NGmPU6JkrT8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDKBGPRyCERUhrNvBLE_vI2yf5xa67PjQRYQDOhZ_4SyL7VwKS3eeoLwYhAKqpow5c3jCVF_JdC15C13WLs7us0bBZmdxEO81tz9Jw9Md8uu&lib=MsW59pOlHEHYIZnQl7KkJZD5VydodrvMG";

fetchMessage();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnKirim.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");
  fetch(scriptURLPost, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      btnKirim.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      setTimeout(() => {
        myAlert.classList.toggle("d-none");
      }, 3000);
      fetchMessage();
    })
    .catch((error) => console.error("Error!", error.message));
});

function fetchMessage() {
  container.innerHTML = `<div class="spinner-border text-warning mt-5" style="width: 2.5rem; height: 2.5rem;" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>`;
  fetch(scriptURLGet)
    .then((resp) => resp.json())
    .then((data) => {
      maker(data);
    });
}

function maker(data) {
  let content = "";
  data.reverse().forEach((message) => {
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
