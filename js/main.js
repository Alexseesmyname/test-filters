var mySwiper = new Swiper('.swiper-container', {
  
  direction: 'horizontal',
  slidesPerView: 'auto',
  centeredSlides: true,
   spaceBetween: 30,
   
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

$(document).ready(function () {
  $('.header__button').click(function(){
    $('.header__form').toggleClass('form__hidden');

  })

  $('.form__button').click(function(){
    $('.header__form').removeClass('form__hidden');
  })

  $('.form__close-button').click(function(){
    $('.header__form').removeClass('form__hidden');
  })

  $(document).mouseup(function (e){
		var headerForm = $('.header__form'); 
		if (!headerForm.is(e.target) && headerForm.has(e.target).length === 0) { 
			headerForm.removeClass('form__hidden');
		}
	});
});


function send(event, php){
console.log("Отправка запроса");
event.preventDefault ? event.preventDefault() : event.returnValue = false;
var req = new XMLHttpRequest();
req.open('POST', php, true);
req.onload = function() {
	if (req.status >= 200 && req.status < 400) {
	json = JSON.parse(this.response); 
    	console.log(json);
        
    	
    	if (json.result == "success") {
    		
    		alert("Сообщение отправлено");
    	} else {
    		
    		alert("Ошибка. Сообщение не отправлено");
    	}
    
    } else {alert("Ошибка сервера. Номер: "+req.status);}}; 


req.onerror = function() {alert("Ошибка отправки запроса");};
req.send(new FormData(event.target));
}
