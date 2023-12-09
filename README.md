let OK = document.querySelector('.ok');
let popUp = document.querySelector('.popup')
let main = document.querySelector('.main')


OK.addEventListener('click', () => {
   popUp.classList.add('active')
   main.classList.remove('active')

   let auto = document.querySelector('.auto-text')
   let prog = "Anh thích em ! Noel này đi chơi với anh nha ♥️"
   let index = 0;
   var time = setInterval(() => {
         auto.textContent = prog.slice(0, index)
         index++;
         if (index > prog.length) {
            clearInterval(time)
         }
   }, 200)
})

let yes = document.getElementById("yes")
let no = document.getElementById("no")
let count = document.getElementById("count")
let popupMain = document.getElementById("popup-main")
let dem = 5;

no.onclick = function () {
   no.classList.toggle('active')
   dem--
   count.textContent = "Số lần thử còn lại: " + dem
   if (dem < 1) {
         count.textContent = "Hết lần thử rồi chọn đi 😂"
         count.style.color = "#fff";
         no.innerHTML = "Em đồng ý !"
         no.classList.remove("active")
   }
   if (dem < 0) {
         popupMain.classList.add('active')
   }
}

yes.addEventListener('click', () => {
   popupMain.classList.add('active')
})

let ip = document.getElementById("ip");
let btn = document.getElementById("btn");
let text = "Vì em cũng muốn đi chơii";
let mess = document.querySelector('.message-me')

btn.onclick = function () {
   ip.value = text
   ip.style.pointerEvents = "none"
   mess.classList.add('active')
   setTimeout(() => {
         popupMain.classList.remove('active')
   }, 2000)

}  
