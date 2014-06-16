// JavaScript Document

(function($) {
	$(document).ready(function() {
	  $('#shadow').css('height',$(document).height())
	  $('#sertificates_form')
	  $('#certificates a').live('click',function(){
	    $('#sertificates_form').html('<img src="'+$(this).attr('href')+'" alt=""/><a href="#">закрыть</a>');
		$('#shadow').show();
		$('#sertificates_form').show();
		vertical_centering($('#sertificates_form'));
	    return false;
	  })
	  $('#sertificates_form a').live('click',function(){$('#sertificates_form,#shadow').hide();return false;})
	  $('#shadow').live('click',function(){$('#sertificates_form,#shadow,#orderForm').hide();})
	  setTimeout(lastdaytimer,1000)
	})
})(jQuery);

DEBUG = 1;

function sendOrderForm(){
			DEBUG && console.log('send order form');
			$.ajax({
				url: '/sendmail',
				type: 'POST',
				dataType: "html",
				data:$('#orderForm').serialize(),
				success: function(data) { 
					closeOrderForm(); 					
					alert('Ваше письмо отправлено, скоро вам ответят.');
				}
			});
}
function closeOrderForm(){
  $('#orderForm').hide();
  $('#shadow').hide();
}
function orderFormShow(val){
	$('#shadow,#orderForm').show();
	$('#orderForm #comment').attr('value',val); 
	
	vertical_centering($('#orderForm'));
	
}


function vertical_centering(el){
	var elTop  = Math.round($(document).scrollTop()+($(window).height()-$(el).height())/2);
	$(el).css('top',elTop);
}
function lastdaytimer(){
  var d = new Date();
  var sec = (59-d.getSeconds()>=10?59-d.getSeconds():'0'+(59-d.getSeconds()));
  var min = (59-d.getMinutes()>=10?59-d.getMinutes():'0'+(59-d.getMinutes()));
  var hour = (23-d.getHours()>=10?23-d.getHours():'0'+(23-d.getHours()));
  var text = hour+':'+min+':'+sec;
  $('#last_day_timer').text(text);
  setTimeout(lastdaytimer,1000)
}
