window.onscroll = function(){
  const winCenter = window.innerHeight/2;
  let elements = Array.from(document.getElementsByClassName('in-a-word'));
  let children = '';
  elements.forEach((ele) => {
    if(ele.getBoundingClientRect().top < winCenter){
      children = Array.from(ele.getElementsByClassName('ciecle'));
      children.forEach((child, index) => {
        function feedup(){
          child.classList.remove('feedup');
        }
        setTimeout(feedup, index*500);
      });
    }
  });
}