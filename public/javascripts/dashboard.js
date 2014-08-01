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




function createPost(postData) {
		row = $('<div/>', {id:'postArea' , class: 'row'});
    postArea = $('<div/>', {id:'postArea', class: 'col-md-10'});
    postMain = $('<div/>', {id:'postMain', class: 'post'});

    postUserName = $('<div/>', {id:'postUserName', class: 'display-name', html: "<a href='#'> Suhas Shetty</a>"  });
    postAction = $('<span/>', { class: 'faded-text', html: " posted a listing in " });
    postLocation = $('<a/>', {id : 'PostLocation' , href:'#', class: 'postlinks' });
    categoryAction = $('<span/>', {html: " under ", class: 'faded-text' });
    postCategory = $('<span/>', {id: 'postCategory'});

    postUserName.append(postAction).append(postLocation).append(categoryAction).append(postCategory);
    profilePic = $('<div/>', {id:'profilePic', class: 'col-md-2', html: 'This is the space for profile picture'});
    
    postContent = $('<div/>', {class: 'col-md-7'});
    postTitle = $('<div/>',{class: 'row-md-4' , id: 'Post'});
    images = $('<div/>', {class: 'row-md-8'}); //insert cols based on number of images
    postContent.append(postTitle).append(images);
     
    postVitals = $('<div/>', {class: 'col-md-3'});
    cost = $('<div/>', {class: 'price-new', id: 'Cost'});
  //  postlocation = $('<div/>', {class: 'price-new', id:'Postlocation'});
    postVitals.append(cost);

    postMain.append(postUserName)
        .append(profilePic)
        .append(postContent)
        .append(postVitals);
    row.append(postArea.append(postMain));

    //    $('#SellerPosts').append($('<div/>', {id:'postArea' + postData, class: 'row'}););
        $('#SellerPosts').append(row);

        row.find("#Cost").html("$" + postData.price);
        row.find("#Post").html(postData.title);
        row.find("#PostLocation").html(postData.location);
//error checking
        for(var i=0; i < postData.category.length; i++) {
        	if(i!=0) {
        		postUserName.append($('<span/>', { class: 'faded-text', html: ' > '}));
        	}
        	postUserName.append($('<a/>', {href:'#', class: 'postlinks', html: postData.category[i]}));

        }

        for(var i=0; i<3 ;i++) {
        	images.append($('<img/>', {src: postData.images[i], class: 'postImage'}));
        }

	//});
}

function populatePosts(){
	$.getJSON( '/getPosts', function(data){
        for(var i =0 ; i< data.msg.length; i++) {
        	createPost(data.msg[i]);
        }
    });
 }       
/*.row
        .col-md-10
          .post
            .display-name
              a(href='#') Suhas Shetty
            .col-md-2
              This is the space for profile picture
            .col-md-7
              .row-md-4 #Post
              .row-md-8
                .col-md-4
                  img(src='http://res.cloudinary.com/thesl/image/upload/c_scale,w_99/v1406300617/camry_fs3lwc.jpg') 
                .col-md-4

            .col-md-3
              .price 
                #Cost
              .empty
              .price  
                | San Francisco       
        .col-md-2 */
	/*
	$.ajax(function(){
		type: 'GET',
		url: '/getPosts',
		id: 1,
		dataT

	}).done(function(req, res) {
      res.
       
	});	*/
//};