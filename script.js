console.log("Welcome to your quotation manager !")

// function presentChoices(){
//     console.log("1: List of quotes")
//     console.log("2: Random quote")
//     console.log("3: Add quote")
//     console.log("0: Quit")
// }

var quotations = new Array();
function Quotation(quote, category, character, title, year){
    this.quote      = quote;
    this.category   = category;
    this.character  = character;
    this.title      = title;
    this.year       = year;
}
Quotation.prototype.describe = function(){
    var description = 
        `   <tr class="parent">
                <td class="child">${this.quote}</td>
                <td class="child">${this.category}</td>
                <td class="child">${this.character}</td>
                <td class="child">${this.title}</td>
                <td class="child">${this.year}</td>
            </tr>
        `
    return description;
}
// Creation of the five first quotations
var jurrasicPark = new Quotation(
    "Your scientists were so preoccupied with whether they could, they didn't stop to think if they should.",
    "Movie",
    "Ian Malcom",
    "Jurassic Park",
    1993); 
var titanic = new Quotation(
    "Oh shit this is cold! Shit, shit, shit.",
    "Movie",
    "Jack Dawson",
    "Titanic",
    1997); 
var toyStory = new Quotation(
    "Shut up ! Just shut up, you idiot!",
    "Movie",
    "Woody",
    "Toy Story",
    1995); 
var goneWith = new Quotation(
    "Frankly, my dear, I don't give a damn.",
    "Movie",
    "Rhett Butler",
    "Gone With the Wind",
    1939); 
var godFather = new Quotation(
    "I'm going to make him an offer he can't refuse.",
    "Movie",
    "Don Corleone",
    "The Godfather",
    1972); 
quotations.push(jurrasicPark);
quotations.push(titanic);
quotations.push(toyStory);
quotations.push(goneWith);
quotations.push(godFather);

function displayForm(){
    var createQuotes = document.getElementById("toHide createQuote");
    createQuotes.id = "toHide createQuote";
    createQuotes.classList.remove("hide");    
}
function removeForm(){
    var toHide = document.getElementById("toHide createQuote");
    toHide.classList.add("hide");
    document.getElementById("quote").value = "";    
    document.getElementById("category").value = "";    
    document.getElementById("title").value = "";    
    document.getElementById("character").value = "";   
    document.getElementById("year").value = "";  
}

function capitalizeFirstLetter(ifno) {
    return ifno.charAt(0).toUpperCase() + ifno.slice(1);
}

function createQuote(){
    var newQuote = document.getElementById("quote").value.toLowerCase()
    newQuote = capitalizeFirstLetter(newQuote);    
    var newCategory = document.getElementById("category").value.toLowerCase();    
    newCategory = capitalizeFirstLetter(newCategory);    
    var newTitle = document.getElementById("title").value.toLowerCase();    
    newTitle = capitalizeFirstLetter(newTitle);    
    var newCharacter = document.getElementById("character").value.toLowerCase();    
    newCharacter = capitalizeFirstLetter(newCharacter);    
    var newYear = document.getElementById("year").value.toLowerCase();    
    // newYear = capitalizeFirstLetter(newYear);    

    var newQuotation = new Quotation(newQuote, newCategory, newTitle, newCharacter, newYear);
    removeForm();
    return quotations.push(newQuotation);

    console.log("Quotation added");

}

function removeAllQuotes(){
    var toHide = document.getElementById("toHide displayQuotes");
    toHide.classList.add("hide");
    document.getElementById("displayQuotes-inside").innerHTML = "";
}

function displayQuotes(){
    var allQuotes = document.getElementById("toHide displayQuotes");
    allQuotes.id = "toHide displayQuotes";
    allQuotes.classList.remove("hide");
    
    quotations.forEach(function(quotation){
        document.getElementById("displayQuotes-inside").innerHTML += quotation.describe();
    });

    console.log("Here's the list of all your quotes :");
    quotations.forEach(function(quotation){
        var i=0;
        i++;
        console.log(quotation.describe());
    });
}

function removeRandomQuotes(){
    var toHide = document.getElementById("toHide randomQuote");
    toHide.classList.add("hide");
    document.getElementById("display-random-quotes").innerHTML = "";
}
function typeOfQuote(numberOfQuotes){
    var typeOfQuote = "";
    typeOfQuote = prompt('Do you want a Movie or a Book ?');
    if(typeOfQuote === "Movie"){
        randomMovie(numberOfQuotes);
    }else if(typeOfQuote === "Book"){
        randomBook(numberOfQuotes);
    }else{
        typeOfQuote(numberOfQuotes);
    }
}
function randomMovie(numberOfQuotes){
    var randomQuotes = document.getElementById("toHide randomQuote");
    randomQuotes.id = "toHide randomQuote";
    randomQuotes.classList.remove("hide");
    
    const films = quotations.filter(function(quotation){
        if(quotation.category === "Movie"){
            return true;
        }
    });
    
    console.table(films);

    for (var counter = 0; counter < numberOfQuotes; counter++) {
        var quotation = films[Math.floor(Math.random()*films.length)];
        document.getElementById("display-random-quotes").innerHTML += quotation.describe();
    }
}

function randomBook(numberOfQuotes){
    var randomQuotes = document.getElementById("toHide randomQuote");
    randomQuotes.id = "toHide randomQuote";
    randomQuotes.classList.remove("hide");
    
    const livres = quotations.filter(function(quotation){
        if(quotation.category === "Book"){
            return true;
        }
    });
    
    console.table(livres);

    for (var counter = 0; counter < numberOfQuotes; counter++) {
        var quotation = livres[Math.floor(Math.random()*livres.length)];
        document.getElementById("display-random-quotes").innerHTML += quotation.describe();
    }
}
function randomQuotes(){
    var numberOfQuotes = "";
    numberOfQuotes = prompt('How many quotes do you want ? (between 1 and 5) :');
    if(numberOfQuotes > 5 || numberOfQuotes <= 0){
        console.log("You can't write this number. Please, try again.")
        randomQuotes();
    }else { 
        typeOfQuote(numberOfQuotes);
    }
}
function refresh() {
    location.reload();
}

// function quotesProgram(){
//     presentChoices();
//     var valeur = document.getElementById("valeur").value
//     if(valeur > 3 || valeur < 0){
//         console.log("You can't write this number. Please, try again.")
//         quotesProgram();
//     }else if (valeur === "1"){
//         displayQuotes();
//     }else if (valeur === "2"){
//         randomQuotes();
//     }else if(valeur === "3"){
//         displayForm();
//     }else{
//         refresh();
//     }
//     return;
// }

