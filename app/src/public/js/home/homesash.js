const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})

const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

searchInput.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const user = document.querySelector("#user"),
    user2 = document.querySelector("#user2"),
    options = document.querySelector("#options"),
    option = document.querySelector("#option");

user.addEventListener("click", show);
user2.addEventListener("click", show);

function show() {
    if (options.style.display == 'none') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }
}

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

let observer1 = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if (box.isIntersecting){
            box.target.style.opacity = 1;
            // box.target.style.transform = translateY('0');
        } else {
            box.target.style.opacity = 0;
        }
    })
})

let first = document.querySelector('.img--2')
observer1.observe(first)

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


gsap.registerPlugin(ScrollTrigger);

gsap.from(".content4", {
  scrollTrigger: {
    trigger: ".content4",
    // markers: true,
    start: "center bottom",
    end: "60% bottom",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".content4-2", {
  scrollTrigger: {
    trigger: ".content4-2",
    // markers: true,
    start: "center bottom",
    end: "60% bottom",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".content7", {
  scrollTrigger: {
    trigger: ".content7",
    // markers: true,
    start: "20% bottom",
    end: "30% bottom",
    scrub: true,
},
  opacity: 0, y: 40
});

gsap.to(".txt2", {
    scrollTrigger: {
      trigger: ".txt2",
      // markers: true,
      start: "-50% bottom",
      end: "-30% 90%",
      scrub: true,
},
    opacity: 1, y: 0
});

gsap.from(".txt3", {
    scrollTrigger: {
      trigger: ".content3",
    //   markers: true,
      start: "bottom bottom",
      end: "bottom 80%",
      scrub: true,
},
    opacity: 1, y: 40, fontSize: '100px'
});

gsap.from(".txt3-2", {
  scrollTrigger: {
    trigger: ".content3-2",
  //   markers: true,
    start: "bottom bottom",
    end: "bottom 80%",
    scrub: true,
},
  opacity: 1, y: 40, fontSize: '80px'
});

gsap.from(".txt3-3", {
  scrollTrigger: {
    trigger: ".content3-3",
  //   markers: true,
    start: "bottom bottom",
    end: "bottom 80%",
    scrub: true,
},
  opacity: 1, y: -10, fontSize: '100px'
});

gsap.from(".txt4-2, .txt4-3, .txt4-4", {
  scrollTrigger: {
    trigger: ".content5",
    // markers: true,
    start: "top bottom",
    end: "30% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".txt4-5", {
  scrollTrigger: {
    trigger: ".txt4-5",
    // markers: true,
    start: "top bottom",
    end: "30% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".txt5", {
    scrollTrigger: {
      trigger: ".content4",
    //   markers: true,
      start: "center bottom",
      end: "70% 80%",
      scrub: true,
},
    opacity: 0, y: 20
});

gsap.from(".txt5-2, .txt5-3, .txt5-4", {
  scrollTrigger: {
    trigger: ".content5-2",
    // markers: true,
    start: "top bottom",
    end: "30% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".txt8-1, .txt8-2, .txt8-3, .txt8-4, .txt8-5, .txt8-6, .txt8-7, .txt8-8, .txt8-9", {
  scrollTrigger: {
    trigger: ".content8",
    // markers: true,
    start: "top bottom",
    end: "30% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".txt8-10, .txt8-11", {
  scrollTrigger: {
    trigger: ".content9",
    // markers: true,
    start: "80% bottom",
    end: "100% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".txt13", {
  scrollTrigger: {
    trigger: ".txt13",
  //   markers: true,
    start: "bottom bottom",
    end: "bottom 80%",
    scrub: true,
},
  opacity: 1, y: -20, fontSize: '100px'
});

gsap.from(".txt14", {
  scrollTrigger: {
    trigger: ".txt14",
    // markers: true,
    start: "top bottom",
    end: "30% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".txt15", {
  scrollTrigger: {
    trigger: ".txt15",
    // markers: true,
    start: "top bottom",
    end: "30% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.to(".sec3", {
    scrollTrigger: {
      trigger: ".sec3",
    //   markers: true,
      start: "top bottom",
      end: "bottom 80%",
      scrub: true,
},
    background: 'rgb(0,0,0)'
});

gsap.from(".img--3", {
  scrollTrigger: {
    trigger: ".img--3",
    // markers: true,
    start: "center bottom",
    end: "60% bottom",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".img--4", {
  scrollTrigger: {
    trigger: ".img--4",
  //   markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: -20
});

gsap.from(".img--5", {
  scrollTrigger: {
    trigger: ".img--5",
  //   markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".card-pic1", {
  scrollTrigger: {
    trigger: ".card-pic1",
    // markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".card-pic2", {
  scrollTrigger: {
    trigger: ".card-pic2",
  //   markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".card-pic3", {
  scrollTrigger: {
    trigger: ".card-pic3",
  //   markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".card-pic4", {
  scrollTrigger: {
    trigger: ".card-pic4",
  //   markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".card-pic5", {
  scrollTrigger: {
    trigger: ".card-pic5",
  //   markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".card-pic6", {
  scrollTrigger: {
    trigger: ".card-pic6",
  //   markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".card-pic7", {
  scrollTrigger: {
    trigger: ".card-pic7",
  //   markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});

gsap.from(".card-pic8", {
  scrollTrigger: {
    trigger: ".card-pic8",
  //   markers: true,
    start: "center bottom",
    end: "70% 80%",
    scrub: true,
},
  opacity: 0, y: 20
});