//Author: Kieu Quang Huynh

const topMenu = document.getElementById("kqh-top-menu")
const toggleTopMenuIcon = document.getElementById("kqh-toggle-top-menu-icon")

document.addEventListener('click', (e) => {
    if(toggleTopMenuIcon.contains(e.target)) {
        //click to Toggle top menu icon
        topMenu.classList.toggle('kqh-topmenu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        //Click outside from Toggle top menu icon
        if(topMenu.classList.contains("kqh-topmenu-expanded")) {
            topMenu.classList.remove("kqh-topmenu-expanded")
            topMenu.classList.add("hidden")
        }
    }
})
