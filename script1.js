var typed = new Typed(".typing", {
  strings: ["Web Developer", "Game Developer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;

for(let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        // Sabhi links se 'active' class hatao
        for(let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }

        // Clicked link par 'active' class lagao
        this.classList.add("active");
        showSection(this)
    });
}
function showSection(element){
    const target = element.getAttribute("href").split("#")[1]
    document.querySelector("#" + target).classList.add("active")
}
