//background
function backgroundflash(cuurentbutton){
    var activebutton= document.querySelector("." + cuurentbutton);
    activebutton.classList.add("pressed");
    setTimeout(function()
    {
        activebutton.classList.remove("pressed");
    }, 100);
    }
//switch case

function makesound(key)
{
    switch (newinnerhtml) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case  "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log(newinnerhtml);
            
    }
}

// button

var l=document.querySelectorAll(".drum").length;
for(var i=0; i< l; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var newinnerhtml= this.innerHTML;
        makesound(newinnerhtml);
        backgroundflash(newinnerhtml);
        
    }
    
    );
}

// using keypress

document.addEventListener("keypress", function(event)
{
    makesound(event.key);
    backgroundflash(event.key);
});



