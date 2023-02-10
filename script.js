const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const result = document.getElementById("result");
let counter = 0;

option1.addEventListener("click", function () {
  counter++;
  if (counter < 3) {
    result.innerHTML = "小孩還是持續哭鬧。";
  } else {
    result.innerHTML = "小孩終於冷靜下來，恭喜你完成安撫。";
  }
});

option2.addEventListener("click", function () {
  result.innerHTML =
    "旁邊的媽媽生氣的說：「你為什麼對我小孩這麼兇！？」，就抱著小孩離開，然後在google map 上留下一顆星評價說這家的牙醫很兇。安撫失敗。";
});

option3.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 2);
  if (randomNum === 0) {
    result.innerHTML = "小孩終於冷靜下來，恭喜你完成安撫。";
  } else {
    result.innerHTML = "小孩甩開貼紙，還是繼續哭。";
  }
});