//스크롤 헤더 색상 반전 이벤트
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('on');
  } else {
    header.classList.remove('on');
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

//투뎁스 보이게
const oneDepthEl = document.querySelectorAll('.m-has-2depth');

oneDepthEl.forEach((oneDepth) => {
  oneDepth.addEventListener('click', () => {
    // 모든 투뎁스 닫기
    document.querySelectorAll('.m-2depth-list').forEach((el) => {
      el.classList.remove('show');
    });

    // 클릭한 원뎁스의 투뎁스만 열기
    const twoDepth = oneDepth.querySelectorAll('.m-2depth-list');
    twoDepth.forEach((el) => {
      el.classList.add('show');
    });
  });
});

//쓰리뎁스 보이게
const twoDepthEl = document.querySelectorAll('.m-2depth-list');
twoDepthEl.forEach((twoDepth) => {
  twoDepth.addEventListener('click', (e) => {
    e.stopPropagation();
    const threeDepth = twoDepth.querySelector('.m-depth-3');
    threeDepth.classList.toggle('show');
  });
});
