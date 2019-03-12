$('button').click(function(){
  
  swal({
  title: 'Are you sure?',
  text: "",
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, send it!'
}).then(function() {
  swal(
    'Sent!',
    'Your message has been sent.',
    'success'
  );
})
  
})