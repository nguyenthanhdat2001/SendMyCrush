let OK = document.querySelector(".ok"), popUp = document.querySelector(".popup"), main = document.querySelector(".main"); OK.addEventListener("click", () => { popUp.classList.add("active"), main.classList.remove("active"); let e = document.querySelector(".auto-text"), t = "Tớ th\xedch cậu ! Cậu làm người yêu tớ nha ♥️", n = 0; var i = setInterval(() => { e.textContent = t.slice(0, n), ++n > t.length && clearInterval(i) }, 200) }); let yes = document.getElementById("yes"), no = document.getElementById("no"), count = document.getElementById("count"), popupMain = document.getElementById("popup-main"), dem = 5; no.onclick = function () { no.classList.toggle("active"), dem--, count.textContent = "Số lần thử c\xf2n lại: " + dem, dem < 1 && (count.textContent = "Hết lần thử rồi chọn đi \uD83D\uDE02", count.style.color = "#fff", no.innerHTML = "Tớ đồng \xfd !", no.classList.remove("active")), dem < 0 && popupMain.classList.add("active") }, yes.addEventListener("click", () => { popupMain.classList.add("active") }); let ip = document.getElementById("ip"), btn = document.getElementById("btn"), text = "V\xec tớ cũng thích cậu", mess = document.querySelector(".message-me"); btn.onclick = function () { ip.value = text, ip.style.pointerEvents = "none", mess.classList.add("active"), setTimeout(() => { popupMain.classList.remove("active") }, 2e3) };
