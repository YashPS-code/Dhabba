xDiv = document.querySelectorAll(".img_str");
for (let i = 0; i < xDiv.length; i++) {
  xDiv[i].addEventListener("click", () => {
    url = "nxtWin.html?" + encodeURIComponent(i);
    window.location.href = url;
  });
};