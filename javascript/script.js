const humbugerTag = document.querySelector(".humbager-menu");
const lineOneTag = document.querySelector(".one");
const lineTwoTag = document.querySelector(".two");
const lineThreeTag = document.querySelector(".three");
const navMenuTag = document.querySelector(".nav-menu");
const listtaglink = document.querySelectorAll(".list-link");
const headerTag = document.querySelector(".header")

window.addEventListener("scroll",function(){
headerTag.classList.toggle("sticky", window.scrollY > 0)
})
const handelHumbuger = () => {
  if (humbugerTag.classList.contains("isOpen")) {
    humbugerTag.classList.remove("isOpen");
    lineOneTag.classList.remove("plug45deg-rotate");
    lineTwoTag.classList.remove("hide");
    lineThreeTag.classList.remove("minus45deg-rotate");
    navMenuTag.classList.remove(".show");
  } else {
    humbugerTag.classList.add("isOpen");
    lineOneTag.classList.add("plug45deg-rotate");
    lineTwoTag.classList.add("hide");
    lineThreeTag.classList.add("minus45deg-rotate");
    navMenuTag.classList.add(".show");
  }
};
humbugerTag.addEventListener("click", handelHumbuger);

const linkAction = () => {
  navMenuTag.classList.remove(".show");
  humbugerTag.classList.remove("isOpen");
  lineOneTag.classList.remove("plug45deg-rotate");
  lineTwoTag.classList.remove("hide");
  lineThreeTag.classList.remove("minus45deg-rotate");
  
};
listtaglink.forEach((n) => n.addEventListener("click", linkAction));
/* For Reviewer */

const reviwers = [
  {
    id: 1,
    name: "Hulie Mak ",
    job: "Wev Developer",
    img: "./Image/person-2.png",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Bular Mi ",
    job: "Photography",
    img: "./Image/person-3.png",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Ninar ",
    job: "Back-End Developer",
    img: "./Image/person-4.png",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Carl Jones ",
    job: "PHP Developer",
    img: "./Image/person-5.png",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    name: "Kumel Bon ",
    job: "Content Writer",
    img: "./Image/person-6.png",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    name: "Floar Si ",
    job: "Graphic Designer",
    img: "./Image/person-7.png",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];
const imageTag = document.querySelector(".image");
const nameTag = document.querySelector(".name");
const jobTag = document.querySelector(".job");
const infoTag = document.querySelector(".info");
const nextbtnTag = document.querySelector(".next-btn");
const reversebtnTag = document.querySelector(".reverse-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});
const showPerson = (person) => {
  const item = reviwers[person];
  imageTag.src = item.img;
  nameTag.textContent = item.name;
  jobTag.textContent = item.job;
  infoTag.textContent = item.info;
};
const nextfun = () => {
  currentItem++;
  if (currentItem > reviwers.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
};
const reversefun = () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviwers.length - 1;
  }
  showPerson(currentItem);
};
nextbtnTag.addEventListener("click", nextfun);

reversebtnTag.addEventListener("click", reversefun);
