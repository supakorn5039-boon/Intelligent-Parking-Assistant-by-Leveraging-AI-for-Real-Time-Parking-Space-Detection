const select = (select) => document.querySelector(select);

const form = select(".form");

form.addEventListener("submit", (e) => {
  console.log("form is submitting");
});
