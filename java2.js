

var People = [
    {name: "Ada Lovelace", 
    img: "img/ada.jpg"},

    {name: "Alan Turing", 
    img: "img/alan.jpg"},

    {name: "Charles", 
    img: "img/charles.jpg"},

    {name: "Bill Gates", 
    img: "img/billGates.png"},

    {name: "Steve Jobs", 
    img: "img/steveJobs.png"},

    {name: "Elon Musk", 
    img: "img/elonSmoking.jpg"},
];


for (var i = 0; i < People.length; i++) {
    var PeopleD = document.createElement('div');
    var PeopleImg = document.createElement('img');
    PeopleImg.src=People[i].img;
    PeopleImg.style.width="300px";
    PeopleImg.style.height="400px";
    PeopleD.appendChild(PeopleImg)
    var PeopleTitle = document.createTextNode(People[i].name);
    PeopleD.appendChild(PeopleTitle);
    document.body.appendChild(PeopleD);
    
  }
