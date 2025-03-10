// ScrollMagic 사용법
let spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시 지정
  })

  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller());
  
});

// 모달창
let modalEl = document.querySelector('#modal');
let modalBtn = document.querySelector('.port .btn-modal');
let img = document.querySelector('#myImage');

console.log(modalBtn);

// 모달창 띄우기
img.addEventListener('click', function() {
  modalEl.style.display = 'flex';
})

// 모달 외부 클릭 시 닫기
window.addEventListener('click', function(event){
  if (event.target == modalEl){
    modalEl.style.display = 'none';
  }
})


// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
new Date().getFullYear(); // 현재 연도 정보가 숫자데이터로 변환
console.log(new Date().getFullYear());

let thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


// 페이지 최상단으로 이동
let toTopBtn = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트 감지를 추가
// window: 브라우저 창 객체
window.addEventListener('scroll', function() {
  // console.log(window.scrollY); // y축 스크롤 위치

  // 페이지 스크롤 위치가
  // 500px을 넘기면 요소를 보이고
  // 500px을 넘지 않으면 요소 숨기기
  if (window.scrollY > 500) {
    // 요소 보이기
    // toTopBtn.style.display='flex';
    // 애니메이션 처리를 하고싶다면
    toTopBtn.style.opacity = 1 ;
    toTopBtn.style.transform = 'translateX(0)';
  }else {
    // 요소 숨기기
    // toTopBtn.style.display='none';
    // 애니메이션 처리를 하고 싶다면
    toTopBtn.style.opacity = 0;
    toTopBtn.style.transform = 'translateX(100px)';
  }
})


// 모바일용 메뉴
let btnHamburger = document.querySelector('.btn-hamburger');
let navEl = document.querySelector('header nav');
let menuItem = document.querySelectorAll('header nav ul li a');
console.log(menuItem);

btnHamburger.addEventListener('click', function() {
  // JS로 클래스를 제어하는 메소드
  // add()/remove()/toggle()/contains()

  // if (navEl.classList.contains('active')){
  //   navEl.classList.remove('active');
  // }else {
  //   navEl.classList.add('active');
  // }


  navEl.classList.toggle('active');
});

menuItem.forEach(function (menuItem) {
  menuItem.addEventListener('click', function() {
    navEl.classList.remove('active');
  });
});