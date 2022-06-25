

// inner html push h2 tag welcoming user.
function welcomeUser() {
document.getElementById("entername").onclick =function(){
    var namestr;
    namestr=document.getElementById("name").value;
    document.getElementById("display").innerHTML="Hi"+" "+namestr+"!"+" "+"Let play some curling trivia!";
  }}

//   rocks smashing intro

function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

function rockIntro () {
    let redRock = newImage('./images/redrock.png')
    let yellowRock = newImage('./images/yellowrock.png')
    $('./images/redrock.png').animate({right: '=30px'}, 2000)
}

// start game function
// ask question function
// keep score function
// 