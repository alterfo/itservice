// JavaScript Document


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
