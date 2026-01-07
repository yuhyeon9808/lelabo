const productImg = document.getElementById('productImg');
const productPrice = document.getElementById('productPrice');
const productOptions = document.getElementById('productOptions');

// URL에서 volume 읽기
const params = new URLSearchParams(window.location.search);
const selectedVolume = params.get('volume');

// JSON 불러오기
const fetchOptions = async () => {
  const response = await fetch('/src/data/eucalyptus-20-detail.json');
  const options = await response.json();

  initProduct(options);
};

//기본 옵션
const initProduct = (options) => {
  let current = options.find((o) => o.volume === selectedVolume);

  if (!current) {
    current = options[0];
  }

  renderOptions(options, current);
  applyOption(current);
};

// 옵션 버튼 렌더
const renderOptions = (options, current) => {
  productOptions.innerHTML = options
    .map(
      (opt) => /*html*/ `
        <button
          type="button"
          class="option-btn ${opt.volume === current.volume ? 'active' : ''}"
          data-volume="${opt.volume}"
          data-price="${opt.price}"
          data-img="${opt.image}"
        >
          ${opt.volume}
        </button>
      `
    )
    .join('');
};

// 이미지 / 가격 적용
const applyOption = (opt) => {
  productImg.src = opt.image;
  productImg.alt = `EUCALYPTUS 20 ${opt.volume}`;
  productPrice.textContent = opt.price.toLocaleString('ko-KR');
};

// 클릭 이벤트
productOptions.addEventListener('click', (e) => {
  const btn = e.target.closest('.option-btn');
  if (!btn) return;

  document
    .querySelectorAll('.option-btn')
    .forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  const option = {
    volume: btn.dataset.volume,
    price: Number(btn.dataset.price),
    image: btn.dataset.img,
  };

  applyOption(option);

  // URL 업데이트
  history.replaceState(
    null,
    '',
    `${location.pathname}?volume=${encodeURIComponent(option.volume)}`
  );
});

fetchOptions();

// 아코디언
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.acc-item');

  items.forEach((item) => {
    const header = item.querySelector('.acc-header');
    const icon = item.querySelector('.icon');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // 한 번에 하나만 열리게
      items.forEach((i) => {
        i.classList.remove('active');
        const ic = i.querySelector('.icon');
        if (ic) ic.textContent = '+';
      });

      // 지금 클릭한 거 토글
      if (!isOpen) {
        item.classList.add('active');
        icon.textContent = '-';
      }
    });
  });
});

//추천 탭
//정보 가져오기
const fetchRecommend = async () => {
  const response = await fetch('/src/data/recommend.json');
  const data = await response.json();
  return renderRecommend(data);
};

fetchRecommend();

const renderRecommend = (data) => {
  const productBox = document.querySelector('.re-product');
  productBox.innerHTML = /*html*/ `
  ${data
    .map(
      (item) => /*html*/ `
    <li class="product-card">
     <a href="${item.link}?volume=${encodeURIComponent(item.volume)}">
       <img src="${item.image}" alt="${item.name} ${item.type}" />
       <div class="product-card-text-wrapper">
       <div class="product-card-textbox">
         <h4 class="product-text-title">${item.name}</h4>
        <span class="product-text-type">${item.type}</span>
         <span class="product-text-volume">${item.volume}</span>
        <span class="product-text-price">${item.price.toLocaleString(
          'ko-KR'
        )}원</span>
        <hr class="border"/>
        <span class="view-btn">view more&nbsp;→</span>
       </div>
      </a>
    </li>`
    )
    .join('')}
  `;
};
