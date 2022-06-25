

// inner html push h2 tag welcoming user.
function welcomeUser() {
document.getElementById("entername").onclick =function(){
    var namestr;
    namestr=document.getElementById("name").value;
    document.getElementById("display").innerHTML="Hi"+" "+namestr+"!"+" "+"Let play some curling trivia!";
  }}