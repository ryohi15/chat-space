$(function(){
  function buildHTML(message){
      if (message.image) {
        var html = 
        `<div class="message" data-message-id=${message.id}>
        <div class="message__upper-info">
          <div class="message__upper-info__sender">
            ${message.user_name}
          </div>
          <div class="message__upper-info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
        <img src=${message.image} >
      </div>`
    } else {
      var html =
       `<div class="message" data-message-id=${message.id}>
          <div class="message__upper-info">
            <div class="message__upper-info__sender">
              ${message.user_name}
            </div>
            <div class="message__upper-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
     .done(function(data){
       var html = buildHTML(data);
       $('.main_chat__message-list').append(html);    
       $('.main_chat__message-list').animate({ scrollTop:$('.main_chat__message-list')[0].scrollHeight});  
       $('form')[0].reset();
       $('.new_message__submit-btn').prop( 'disabled', false );
     })
     .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  })
});