$(document).ready(function() {
/*$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

$('#sidebar').affix({
      offset: {
        top: 200
      }
});*/	

	    $('.menu li').click(function() {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        
    });
	    /*
	$('#Home a').click(function (e) {
		 $(this).addClass('active');
  //e.preventDefault();
 // $(this).tab('show');
});
		$('#Profile a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
			$('#Messages a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});*/
	populatePosts();
});

function populatePosts(){
	$.getJSON( '/getPosts', function(data){
        $("#Cost").html("$" + data.msg.cost);
        $("#Post").html(data.msg.post_description);
	});

	/*
	$.ajax(function(){
		type: 'GET',
		url: '/getPosts',
		id: 1,
		dataT

	}).done(function(req, res) {
      res.
       
	});	*/
};