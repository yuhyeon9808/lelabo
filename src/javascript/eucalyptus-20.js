//제품 데이터 불러오기
const fetchData = async () => {
  const response = await fetch('/src/data/eucalyptus-20.json');
  const data = await response.json();
  renderProduct(data);
};

fetchData();

//제품 렌더링 하기
const renderProduct = (data) => {
  const wrapper = document.querySelector('.product-list');
  wrapper.innerHTML = /*html*/ `
  ${data
    .map(
      (item) => /*html*/ `<li class="product-card">
      <a href=${item.link}>
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
