const closeMenuIcon = document.querySelector(".icon-close-menu");
const menuIcon = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal-offcanvas");
const featureLi = document.querySelectorAll(".features");
const companyLi = document.querySelectorAll(".company");

let isFeatureClick = false;
let isCompanyClick = false;

console.log(featureLi);

featureLi.forEach((val) => {
  val.addEventListener("click", () => {
    const featureDropDown = val.querySelector(".dropdown-lists");
    const featureArrowUp = val.querySelector(".arrow-up");
    const featureArrowDown = val.querySelector(".arrow-down");
    console.log(isFeatureClick);
    if (!isFeatureClick) {
      featureDropDown.style.display = "block";
      featureArrowDown.style.display = "none";
      featureArrowUp.style.display = "inline-block";
      isFeatureClick = true;
    } else {
      featureDropDown.style.display = "none";
      featureArrowDown.style.display = "inline-block";
      featureArrowUp.style.display = "none";
      isFeatureClick = false;
    }
  });
});

companyLi.forEach((val) => {
    val.addEventListener("click", () => {
        const companyDropDown = val.querySelector(".dropdown-lists");
        const companyArrowUp = val.querySelector(".arrow-up");
        const companyArrowDown = val.querySelector(".arrow-down");
        console.log(isCompanyClick);
        if (!isCompanyClick) {
            companyDropDown.style.display = 'block';
            companyArrowDown.style.display = 'none';
            companyArrowUp.style.display = 'inline-block';
            isCompanyClick = true;
        } else {
            companyDropDown.style.display = 'none';
            companyArrowDown.style.display = 'inline-block';
            companyArrowUp.style.display = 'none';
            isCompanyClick = false;
        }
    });
});

menuIcon.addEventListener("click", () => {
  modal.style.display = "block";
});

closeMenuIcon.addEventListener("click", () => {
  modal.style.display = "none";
});
