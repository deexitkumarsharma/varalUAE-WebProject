let hamburgerBtn = document.querySelector(".hamburger");
let extrasUrls = document.querySelector(".extrasUrls");
let toggleValue = false;
hamburgerBtn.addEventListener("click", (event) => {
  toggleValue = !toggleValue;
  if (toggleValue) {
    event.target.src = "Assets/cross.png";
    extrasUrls.style.display = "flex";
  } else {
    event.target.src = "Assets/bars.png";
    extrasUrls.style.display = "none";
  }
});

window.addEventListener("resize", (e) => {
  let mainPriceContainer = document.querySelector(".mainPrice");

  let contentWidth = document.querySelector(".itemx").clientWidth * 3;
  let wrapperWidth = mainPriceContainer.clientWidth;
  mainPriceContainer.scrollLeft = (contentWidth - wrapperWidth) / 2 + 40;
});
