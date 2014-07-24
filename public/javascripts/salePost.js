$(document).ready(function() {
    $('#postButton').on('click', addPost);
});

function addPost() {
	var newPost =  {
		'userid' : 2,
		'post_description' : $('#sellerPost').find("#post-description").val(),
		'cost' : $('#sellerPost').find("#cost").val()
	};

	$.ajax({
       type: 'POST',
       data: newPost,
       url: "/addPost",
       dataType: 'JSON'
	}).done(function(response) {
		    if (response.msg === '') {
              alert('Done');
            } else {
                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);
            }

	});
};