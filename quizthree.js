$(document).ready()
$('#add').click(function(){
    var id = $('#textfield').val();
    $('#list').append("<li>"+id+"</li>");
    console.log(id);
   });

