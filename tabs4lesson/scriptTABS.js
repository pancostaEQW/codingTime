const tabs = document.getElementById("tabs");
const tabstwo = document.getElementById("tabstwo");
const content = document.querySelectorAll(".content");

const changeClass = (el) => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove("active");
  }
  el.classList.add("active");
};

const twochangeClass = (el) => {
  for (let i = 0; i < tabstwo.children.length; i++) {
    tabstwo.children[i].classList.remove("active");
  }
  el.classList.add("active");
};

tabs.addEventListener("click", (e) => {
  const currTab = e.target.dataset.btn;
  changeClass(e.target);
  for (i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
    if (content[i].dataset.content === currTab) {
      content[i].classList.add("active");
    }
  }
});

tabstwo.addEventListener("click", (el) => {
  const currTab = el.target.dataset.btn;
  twochangeClass(el.target);
  for (i = 0; i < content[2].length; i++) {
    content[i].classList.remove("active");
    if (content[i].dataset.content === currTab) {
      content[i].classList.add("active");
    }
  }
});
