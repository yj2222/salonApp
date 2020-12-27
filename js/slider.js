document.addEventListener('DOMContentLoaded', function(){
  // slider用の変数
  let $slideList = '';
  const $slideLen = document.getElementsByClassName('slide').length;
  let $active = '';
  let $activeIndex = 0;
  let $slideFirst = '';
  let $slideLast = '';
  // スワイプの変数
  let swipeItem = document.querySelector('.slider-wrap');
  let startX = 0;
  let moveX = 0;
  const minMove = 30;
  // slider起動時の変数再代入メソッド
  function setList(){
    $slideList = Array.from(document.getElementsByClassName('slide'));
    $active = document.querySelector('.active');
    $activeIndex = $slideList.indexOf($active);
    $slideFirst = $slideList.shift();
    $slideLast = $slideList.pop();
  }
  function sliderPrev(){
    // 最初の要素がactiveだった場合、最後に戻る。
    if($activeIndex === 0){
      $slideFirst.classList.remove('active', 'leftin', 'rightin')
      $slideLast.classList.add('active', 'rightin')
    } else {
      $active.classList.remove('active', 'leftin', 'rightin')
      $active.previousElementSibling.classList.add('active', 'rightin')
    }
  }
  function sliderNext(){
    // 最後の要素がactiveだった場合、１番目に戻る。
    if($activeIndex === $slideLen - 1){
      $slideFirst.classList.add('active', 'leftin');
      $slideLast.classList.remove('active', 'leftin', 'rightin');
    } else {
      $active.classList.remove('active', 'leftin', 'rightin')
      $active.nextElementSibling.classList.add('active', 'leftin');
    }
  }
  // クリックイベント、セレクタ#next。
  document.getElementById('next').addEventListener("touchstart", function() {
    setList();
    sliderNext();
  });
  document.getElementById('next').addEventListener("click", function() {
    setList();
    sliderNext();
  });
  // クリックイベント、セレクタ#prev。
  document.getElementById('prev').addEventListener("touchstart", function() {
    setList();
    sliderPrev();
  });
  document.getElementById('prev').addEventListener("click", function() {
    setList();
    sliderPrev();
  });
  // slider自動実行
  setInterval(function(){ 
    setList();
    sliderNext();
  },10000);
  // スワイプイベント 
  swipeItem.addEventListener("touchstart", function(e) {
    e.preventDefault();
    startX = e.touches[0].pageX;
  });
  swipeItem.addEventListener("touchmove", function(e) {
    e.preventDefault();
    moveX = e.changedTouches[0].pageX;
    console.log(`X=${startX}~${moveX}`);
  });
  swipeItem.addEventListener("touchend", function(e) {
    if(startX > moveX + minMove){ // 右から左スワイプ
      document.getElementById('prev').click();
    }
    else if(startX + minMove < moveX){ // 左から右スワイプ
      document.getElementById('next').click();
    }
  });
},false);