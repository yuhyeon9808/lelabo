//스크롤 헤더 색상 반전 이벤트
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('on');
  } else {
    header.classList.remove('on');
  }
});

const mobileHeader = document.querySelector('.m-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    mobileHeader.classList.add('on');
  } else {
    mobileHeader.classList.remove('on');
  }
});

//햄버거 메뉴
// 열기
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  const menu = document.querySelector('.m-menu');
  menu.classList.add('open');
});

// 닫기
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  const menu = document.querySelector('.m-menu');
  menu.classList.remove('open');
});

//투뎁스 하나만 열리게
document.addEventListener('DOMContentLoaded', () => {
  const mMenu = document.querySelector('.m-menu');
  const twoDepthDetails = mMenu.querySelectorAll('details.m-2depth');

  // 초기 로드시 열림 상태 제거
  twoDepthDetails.forEach((d) => d.removeAttribute('open'));

  // 각 2depth에 toggle 리스너 부착
  twoDepthDetails.forEach((current) => {
    current.addEventListener('toggle', () => {
      if (!current.open) return;

      twoDepthDetails.forEach((d) => {
        if (d !== current) d.removeAttribute('open');
      });
    });
  });
});
