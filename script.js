window.addEventListener("resize", function () {
  let w = document.documentElement.clientWidth;

  if (w <= 606) {
    return (document.querySelector(".profile__link-img").src =
      "./images/profile.svg");
  } else if (w > 606) {
    return (document.querySelector(".profile__link-img").src =
      "./images/ava.svg");
  }
});
