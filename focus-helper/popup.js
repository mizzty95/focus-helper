
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
startBtn.addEventListener("click", () => {
    chrome.runtime.sendMessage( "start" , function (response) {
        console.log(response);
    });
});
stopBtn.addEventListener("click", () => {
    chrome.runtime.sendMessage( "stop" , function (response) {
        console.log(response);
    });
});