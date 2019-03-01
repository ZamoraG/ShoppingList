//Jquery
var x = 0;
$('.adder').on('click', function(event){
	event.preventDefault();
	$('span.error-keyup-1').hide();
    var txt = $("#item").val();
	var patt2 = /[a-z]+/;
	if(txt.match(patt2)) {
        $("#shopitems").append("<li id='newit"+x+"' class='list'><fieldset id='fi"+x+"'><i>"+txt+"</i></fieldset></li><br>");
  		var n = $("#fi"+x);
  		$(n).append("<br><br><button type='button' id='chk"+x+"' class='botc'>check</button>")
  		$(n).append("&nbsp <button type='button' id='del"+x+"' class='botd'>delete</button>")
  		x++;
    } else {
  		$(this).after('<span class="error error-keyup-1">Please introduce an item</span>');
    }
    
});

$(document).on('click', '.botd' , function(event){
	$(this).closest('li').remove();
});

$(document).on('click', '.botc' , function(event){
	var b = $(this).closest('li').attr('class');
	if(b == "list"){
		$(this).closest('li').removeClass('list');
		$(this).closest('li').addClass('doneli');
		$(this).closest('li').css('text-decoration', 'line-through');
	} else {
		$(this).closest('li').removeClass('doneli');
		$(this).closest('li').addClass('list');
		$(this).closest('li').css('text-decoration', 'none');
	}
});