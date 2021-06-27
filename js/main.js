$(function(){
  let reservBtn = $('.reservBtn');
  reservBtn.hide();
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      reservBtn.fadeIn();
    } else {
      reservBtn.fadeOut();
    }
  });
});
