$(window).on('resize', function() {
  if($(window).height() < 400) {
      $('#user_name').addClass('form-control-lg');
      $('#user_email').addClass('form-control-lg');
      $('#user_message').addClass('form-control-lg');
  }else{
    $('#user_name').removeClass('form-control-lg');
    $('#user_email').removeClass('form-control-lg');
    $('#user_message').removeClass('form-control-lg');
  }
})
