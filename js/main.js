window.onload = function(){
  // slider用の変数
  let $slideList = '';
  const $slideLen = document.getElementsByClassName('slide').length;
  let $active = '';
  let $activeIndex = 0;
  let $slideFirst = '';
  let $slideLast = '';

  function setList(){
    $slideList = Array.from(document.getElementsByClassName('slide'));
    $active = document.querySelector('.active');
    $activeIndex = $slideList.indexOf($active);
    $slideFirst = $slideList.shift();
    $slideLast = $slideList.pop();
  }
  // クリックイベント、セレクタ#next。
  document.getElementById('next').onclick = function() {
    setList();
    // 最後の要素がactiveだった場合、１番目に戻る。
    if($activeIndex === $slideLen - 1){
      $slideFirst.classList.add('active', 'leftin');
      $slideLast.classList.remove('active', 'leftin', 'rightin');
    } else {
      $active.classList.remove('active', 'leftin', 'rightin')
      $active.nextElementSibling.classList.add('active', 'leftin');
    }
  };
  // クリックイベント、セレクタ#prev。
  document.getElementById('prev').onclick = function() {
    setList();
    // 最初の要素がactiveだった場合、最後に戻る。
    if($activeIndex === 0){
      $slideFirst.classList.remove('active', 'leftin', 'rightin')
      $slideLast.classList.add('active', 'rightin')
    } else {
      $active.classList.remove('active', 'leftin', 'rightin')
      $active.previousElementSibling.classList.add('active', 'rightin')
    }
  };
  // slider自動実行
  setInterval(function(){ 
    document.getElementById('next').click();
  },10000);
}