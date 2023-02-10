const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');
const result = document.getElementById('result');

choice1Button.addEventListener('click', function() {
    result.innerHTML = '小孩終於冷靜下來，恭喜你完成安撫';
});

choice2Button.addEventListener('click', function() {
    const randomResult = Math.random() < 0.5 ? '小孩終於冷靜下來，恭喜你完成安撫' : '小孩甩開貼紙，還是繼續哭';
    result.innerHTML = randomResult;
});