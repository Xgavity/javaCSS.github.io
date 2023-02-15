var body = document.body;
body.style.fontFamily = "Arial,sans-serif";

document.getElementById("nickname").innerHTML = "Aaron";
document.getElementById("favorites").innerHTML = "idk";
document.getElementById("hometown").innerHTML = "cityville";

var lis = document.getElementsByTagName("li");



for(var i = 0; i < lis.length; i++)
{
    lis[i].classList.add("list-item");
}

var pic = document.createElement("img");
pic.src = "img/Aaron.png";
pic.style.height = "200px";
pic.style.width = "200px";
body.appendChild(pic)