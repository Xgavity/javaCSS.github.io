var books = [
    {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
    img: "img/book1.jpg"
    }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    img: "img/book2.jpg"
    }
    ];
    var flexbox = document.createElement("div");
    var body = document.body;
    body.appendChild(flexbox);
    
    flexbox.style.width = "1000";
    flexbox.style.height = "1000";
    flexbox.style.display = "flex";
    flexbox.style.justifyContent = "center";
    flexbox.style.alignContent = "space-around";

    for(var i = 0; i <= books.length; i++)
    {
    var BooksD = document.createElement('div');
    var BooksImg = document.createElement('img');
    BooksImg.src=books[i].img;
    BooksImg.style.width="300px";
    BooksImg.style.height="400px";
    var read = books[i].alreadyRead;
    if(read == true){
        BooksImg.style.filter = "grayscale(100%)";
    }
    BooksD.appendChild(BooksImg)
    var BooksTitle = document.createTextNode(books[i].title);
    BooksD.appendChild(BooksTitle);
    var BooksAutor = document.createTextNode(books[i].author);
    BooksD.appendChild(BooksTitle);
    document.body.appendChild(BooksD);
    }

people