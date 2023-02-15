var arr = ["Ada Love", "Alan Turing", "Charles Babbage", "Steve Jobs", " Bill Gates", "Elon Musk"]

        var flexbox = document.createElement("div");
        var body = document.body;
        body.appendChild(flexbox);
        
        flexbox.style.width = "1000";
        flexbox.style.height = "1000";
        flexbox.style.display = "flex";
        flexbox.style.justifyContent = "center";
        flexbox.style.alignContent = "space-around";

        var adaBox = document.createElement("div");
        var alanBox = document.createElement("div");
        var charlesBox = document.createElement("div");
        var steveBox = document.createElement("div");
        var billBox = document.createElement("div");
        var elonBox = document.createElement("div");

        flexbox.appendChild(adaBox);
        flexbox.appendChild(alanBox);
        flexbox.appendChild(charlesBox);
        flexbox.appendChild(steveBox);
        flexbox.appendChild(billBox);
        flexbox.appendChild(elonBox);

        

        var adaImg = document.createElement("img")
        adaImg.src = "img/ada.jpg";
        var alanImg = document.createElement("img")
        alanImg.src = "img/alan.jpg";
        var charlesImg = document.createElement("img")
        charlesImg.src = "img/charles.jpg";
        var steveImg = document.createElement("img")
        steveImg.src = "img/steveJobs.png";
        var billImg = document.createElement("img")
        billImg.src = "img/billGates.png";
        var elonImg = document.createElement("img")
        elonImg.src = "img/elonSmoking.jpg";

        elonImg.style.width = "200px"
        elonImg.style.height = "200px"
        adaImg.style.width = "200px"
        adaImg.style.height = "200px"
        alanImg.style.width = "200px"
        alanImg.style.height = "200px"
        charlesImg.style.width = "200px"
        charlesImg.style.height = "200px"
        steveImg.style.width = "200px"
        steveImg.style.height = "200px"
        billImg.style.width = "200px"
        billImg.style.height = "200px"
        
        
        /* var images = document.getElementsByTagName("img")

        images.style.width = "20%"
        images.style.width */



        adaBox.appendChild(adaImg);
        alanBox.appendChild(alanImg);
        charlesBox.appendChild(charlesImg);
        steveBox.appendChild(steveImg);
        billBox.appendChild(billImg);
        elonBox.appendChild(elonImg);

        var adaText = document.createElement("p");
        var alanText = document.createElement("p");
        var charlesText = document.createElement("p");
        var steveText = document.createElement("p");
        var billText = document.createElement("p");
        var elonText = document.createElement("p");

        adaText.innerHTML = "Ada Lovelace"
        alanText.innerHTML = "Alan"
        charlesText.innerHTML = "Charles"
        steveText.innerHTML = "Steve Jobs"
        billText.innerHTML = "Bill Gates"
        elonText.innerHTML = "Elon Musk"

        
        var texts = document.getElementsByTagName("p");
        
        
        


        adaBox.appendChild(adaText);
        alanBox.appendChild(alanText);
        charlesBox.appendChild(charlesText);
        steveBox.appendChild(steveText);
        billBox.appendChild(billText);
        elonBox.appendChild(elonText);



        document.body.appendChild(flexbox);