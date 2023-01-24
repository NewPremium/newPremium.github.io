// 프로젝트 서서히 보이기
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // do something
            entry.target.style.opacity = 1;
        }
    })
})

let text_elements = document.getElementsByClassName('info_box');
for (let i of text_elements) {
    observer.observe(i);
}

// 최상단 상자 스크롤에 따라 움직이기
document.addEventListener('scroll', function() {
    var currentScrollValue = document.body.scrollTop;
    document.getElementsByClassName('top')[0].style.top = (currentScrollValue * (-0.5)) + 'px';
});