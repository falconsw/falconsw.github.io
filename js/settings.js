  var githubUser="falconsw";
  var name="Omer";
  var job="web developer";
  var email="omer_dogan@outlook.com";
  var instagram ="falconsoftw";
  var facebook ="falconsoftw";
  
  
  
$(document).ready(function(){
$("#name").html(name);
$("#job").html(job);
$("#social").html('<a href="https://facebook.com/'+facebook+'" target="_blank" class="contact-details">Facebook</a>'+
  '<a id="profile-link" href="https://github.com/'+githubUser+'" target="_blank" class="contact-details">GitHub</a>'+
  '<a href="https://instagram.com/'+instagram+'" target="_blank" class="contact-details">Instagram</a>'+
  '<a href="mailto:'+email+'" class="contact-details">Send a mail</a>');
  $("#footer").html(githubUser+' <a href="mailto:'+email+'" target="_blank">'+name+'</a>')
  document.title="A Pen by "+githubUser;
  
$.getJSON("https://api.github.com/users/"+githubUser+"/repos",function(result){
$("#profile").html('<img class="img_me" src="'+result[0].owner.avatar_url+'" alt="me">');
  $.each(result, function(i, field){
  
    $("#projects").append('<a href="'+field.html_url+'" target="_blank" class="project project-tile">'+
	'<img class="project-pic" src="https://raw.githubusercontent.com/'+githubUser+'/'+field.name+'/master/screen.png" alt="project">'+
	'<div class="project-title">'+field.name+'</div>'+
	'</a>');
      });
    });
});