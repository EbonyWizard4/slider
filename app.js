let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carroselDom = document.querySelector('.carrosel');
let listItemDom = document.querySelector('.carrosel .lista');
let thumbnailDom = document.querySelector('.carrosel .thumbnail');

nextDom.onclick = function () {
    showSlider('next');
}

prevDom.onclick = function () {
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 4000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let itensSlider = document.querySelectorAll('.carrosel .lista .item');
    let itemThumbnail = document.querySelectorAll('.carrosel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itensSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carroselDom.classList.add('next');
    } else {
        let positionLestItem = itensSlider.length - 1;
        listItemDom.prepend(itensSlider[positionLestItem]);
        thumbnailDom.prepend(itemThumbnail[positionLestItem]);
        carroselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carroselDom.classList.remove('next');
        carroselDom.classList.remove('prev');

    }, timeRunning);



}