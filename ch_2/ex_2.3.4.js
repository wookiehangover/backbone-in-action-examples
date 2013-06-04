$(function(){

  $('form').on('submit', function(event){
    event.preventDefault();
    var commentData = {
      content: this.$('form textarea').val(),
      email: this.$('form input[name="email"]').val(),
      created_at: +new Date()
    };

    $.ajax({
      url: '/posts/123/comments',
      type: 'post',
      dataType: 'json',
      data: commentData,
      success: function(data, status, jqXhr){
        var renderedComment = commentTemplate(data);
        $('#comment-list').prepend(renderedComment);
        $('form textarea, form input[name="email"]').val(null);
      }
    });
  });
});

