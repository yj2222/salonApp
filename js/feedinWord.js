window.addEventListener('load', () => {
  let keyVisText = document.querySelector('.key-vis').firstElementChild.textContent.split('');
  document.querySelector('.key-vis').firstElementChild.innerHTML = '';
  keyVisText.forEach((word, i) => {
    function fadeinWord(){
      console.log(word)
      document.querySelector('.key-vis').firstElementChild.insertAdjacentHTML('beforeend', `<span>${word}</span>`)
      // document.querySelector('.key-vis').firstElementChild.innerHTML = `<span>${word}</span>`;
    }
    setTimeout(fadeinWord, i*300);
  })
});