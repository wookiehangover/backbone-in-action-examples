var posts = document.getElementById(‘posts’);
posts.style = “display: none”;

var comments = document.getElementByClassName(‘comments’);
for(var i=0; i < comments.lenght; i++){
  comments[i].style = “display: block”;
}

$(‘#posts’).hide();
$(‘.comments’).show();

