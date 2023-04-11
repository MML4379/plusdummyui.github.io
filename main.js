const body = document.getElementById("plusapp");
const notifCount = document.getElementById("notifCnt");
const posts = document.getElementById("fyp");
const notifBell = document.getElementById("notifBell");
const shareBox = document.getElementById("shareBox");
const shareLink = document.getElementById("shareLink");

notifCount.style.color = "#dd0404";
notifCount.style.fontWeight = "bold";
var notifs = 1;
var ping = new Audio("./notif.mp3");
for (let i = 0; i < notifs; i++) {
    var interval = setInterval(function() {
        notifBell.style.animation = "shake 1s";
        notifs = notifs + 1;
        if (notifs >= 999999) {
            clearInterval(interval);
        }
        document.title = `(${notifs}) MML+ • Home`;
        if (notifs > 99) {
            notifCount.innerText = "99+"
        }else {
            notifCount.innerText = notifs;
            ping.play();
        }
    }, 2500);
}

function shareModal(postid) {
    shareBox.style.display = "block";
    shareBox.style.backdropFilter = blur("5px");
    shareLink.innerHTML = `<a href="https://plus.mmltech.net/post/${postid}">https://plus.mmltech.net/post/${postid}</a>`;
}