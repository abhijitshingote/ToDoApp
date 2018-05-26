$('ul').on('click','li',function() {
	$(this).toggleClass('completed');
})

$('ul').on('click','span',function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(1000,function() {
		$(this).remove();
	});


})

$('input').on('keypress',function(event){
	if(event.which===13){
		$('ul').append('<li><span>X</span>'+$(this).val()+'</li>')
		$(this).val('');	
	};
})