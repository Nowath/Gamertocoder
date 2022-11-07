const sections = document.querySelectorAll(".section");
const aside_li = document.querySelectorAll("ul li");
console.log(aside_li)
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {

            current = section.getAttribute("id");

        }
    });

    aside_li.forEach((li) => {

        li.classList.remove("acv");
        if (li.classList.contains(current+"_sb")) {
            li.classList.add("acv");

        }
    });
});

