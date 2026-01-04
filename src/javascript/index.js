//스크롤 헤더 색상 반전 이벤트
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('on');
  } else {
    header.classList.remove('on');
  }
});
