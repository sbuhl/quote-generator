console.log("Welcome to your quotation manager !")

function presentChoices(){
    console.log("1: List of quotes")
    console.log("2: Random quote")
    console.log("3: Add quote")
    console.log("0: Quit")
}

// Create a new Array to store all the contacts and a Object to create the contacts
var quotations = new Array();
function Quotation(quote, category, character, year){
    this.quote      = quote;
    this.category   = category;
    this.title      = title;
    this.character  = character;
    this.year       = year;
}
Quotation.prototype.describe = function(){
    var description = "Quote : " + this.quote + ", film : " + this.category;
    return description;
}
// Creation of the five firsts quotations
var jurrasicPark = new Quotation(
    "Your scientists were so preoccupied with whether they could, they didn't stop to think if they should.",
    "Movie",
    "Jurassic Park",
    "Ian Malcom",
    1993); 
var titanic = new Quotation(
    "Oh shit this is cold! Shit, shit, shit.",
    "Movie",
    "Titanic",
    "Jack Dawson",
    1997); 
var toyStory = new Quotation(
    "Shut up ! Just shut up, you idiot!",
    "Movie",
    "Toy Story",
    "Woody",
    1995); 
var goneWith = new Quotation(
    "Frankly, my dear, I don't give a damn.",
    "Movie",
    "Gone With the Wind",
    "Rhett Butler",
    1939); 
var godFather = new Quotation(
    "I'm going to make him an offer he can't refuse.",
    "Movie",
    "The Godfather",
    "Don Corleone",
    1972); 
quotations.push(jurrasicPark);
quotations.push(titanic);
quotations.push(toyStory);
quotations.push(goneWith);
quotations.push(godFather);

function createQuote(){
    var newQuote = prompt("Add the quote");
    var newMovie = prompt("Add the movie");
    var newCharacter = prompt("Add the character saying that");
    var newYear = prompt("Add the year of the movie");
    var newQuotation = new Quotation(newQuote, newMovie, newCharacter, newYear);
    quotations.push(newQuotation);
    console.log("Quotation added");
    quotesProgram();
}

function displayQuotes(){
    console.log("Here's the list of all your quotes :");
    quotations.forEach(function(quotation){
        console.log(quotation.describe());
    });
    quotesProgram();
}

function randowQuotes(){
    var numberOfQuotes = "";
    numberOfQuotes = prompt('How many quotes do you want ? :');
    
    var quotation = quotations[Math.floor(Math.random()*quotations.length)];
    console.log(quotation.describe());
    quotesProgram();
}
// Program
function quotesProgram(){
    presentChoices();
    var valeur = prompt('Enter a number between 0 and 3 :');
    if(valeur > 3 || valeur < 0){
        console.log("You can't write this number. Please, try again.")
        quotesProgram();
    }else if (valeur === "1"){
        displayQuotes();
    }else if (valeur === "2"){
        randowQuotes();
    }else if(valeur === "3"){
        createQuote();
    }
    console.log("Reload the page to have access to the little program.")
}

function close_window() {
    if (confirm("Close Window?")) {
      close();
    }
}
