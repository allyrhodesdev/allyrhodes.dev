document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const url = "https://formsubmit.co/ajax/e7ab10aa233d3f3451ef506cec5f5839";
  const formData = new FormData(form);

  try {
    const res = await fetch(url, { method: "POST", body: formData, headers: { "Accept": "application/json" } });
    if (!res.ok) throw new Error("Request failed");

    form.reset();

    const thank = document.getElementById("thankYou");
    thank.classList.add("show");
    clearTimeout(thank.__hideTimer);
    thank.__hideTimer = setTimeout(() => {
      thank.classList.remove("show");
    }, 3000);

  } catch (err) {
    alert("Something went wrong. Please try again.");
  }
});
