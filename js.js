'use strict';
function handleCatClicks(){
  $('.thumbnail').on('click', function (event) {
    const sourceImage = $(this).find('img').attr('src');
    const sourceAlt = $(this).find('img').attr('alt');

    $('.hero img').attr('src', sourceImage).attr('alt', sourceAlt);
});
}


$(handleCatClicks());

