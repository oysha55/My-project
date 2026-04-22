const soat = document.querySelector(".soat")
const min = document.querySelector(".minute")
const sec = document.querySelector(".second")

setInterval(() => {
    let data = new Date()
    
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()

    // Raqam 10 dan kichik bo'lsa, oldiga "0" qo'shish
    soat.textContent = h < 10 ? "0" + h : h
    min.textContent = m < 10 ? "0" + m : m
    sec.textContent = s < 10 ? "0" + s : s
}, 1000);
const mon = document.querySelector(".mon")
const day = document.querySelector(".day")
const year = document.querySelector(".year")
setInterval(() => {
    let kun = new Date()
    
    let m = kun.getMonth()< 10 ? + (kun.getMonth()+1):kun.getMonth()
    let d = kun.getDate()
    let y = kun.getFullYear()

   mon.textContent=m
   day.textContent=d
   year.textContent=y
}, 1000);
