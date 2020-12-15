document.addEventListener('DOMContentLoaded', function(){
	let thumbnailList = document.querySelectorAll('.thumbnail');
  let mainImage = document.getElementById('mainImage');
  let imgUri = '';
  thumbnailList.forEach((img) => {
    img.onclick = function(){
      imgUri = img.getAttribute('src');
      mainImage.setAttribute('src', imgUri)
    }
  })
},false);
