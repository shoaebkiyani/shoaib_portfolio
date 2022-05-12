const currentLocation = location.href;
const navLink = document.querySelectorAll("a");
const navItem = document.querySelectorAll(".nav-item");

for (let i = 0; i < navLink.length; i++) {
  if (navLink[i].href === currentLocation) {
    navItem[i].classList.add("active");
  }
}

// profile links selector

const resumeLink = document.querySelectorAll(".profile-link");
const iconLinks = document.querySelectorAll(".fas");

const contentLink = document.querySelectorAll(".detail");

resumeLink.forEach((item) => {
  item.addEventListener("click", function (e) {
    resumeLink.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    iconLinks.forEach((icon) => {
      icon.addEventListener("click", function (e) {
        const filter = e.target.dataset.filter;

        contentLink.forEach((content) => {
          if (content.classList.contains(filter)) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        });
      });
    });

    const filter = e.target.dataset.filter;

    contentLink.forEach((content) => {
      if (content.classList.contains(filter)) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

document.getElementsByTagName("FORM").reset();
