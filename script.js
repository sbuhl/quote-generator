console.log("Welcome to your quotation manager !")

function presentChoices(){
    console.log("1: List of quotes")
    console.log("2: Random quote")
    console.log("3: Add quote")
    console.log("0: Quit")
}

// Create a new Array to store all the contacts and a Object to create the contacts
var quotations = new Array();
function Quotation(quote, category, character, title, year){
    this.quote      = quote;
    this.category   = category;
    this.title      = title;
    this.character  = character;
    this.year       = year;
}
Quotation.prototype.describe = function(){
    // var description = "Quote : " + this.quote + ", film : " + this.category;
    var description = 
        `
            <div class="parent">
                <div class="child">${this.quote}</div>
                <div class="child">${this.category}</div>
                <div class="child">${this.title}</div>
                <div class="child">${this.character}</div>
                <div class="child">${this.year}</div>
            </div>
        `
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

function createQuote(){
    var newQuote = document.getElementById("quote").value;    
    var newCategory = document.getElementById("category").value;    
    var newTitle = document.getElementById("title").value;    
    var newCharacter = document.getElementById("character").value;    
    var newYear = document.getElementById("year").value;    

    
    var newQuotation = new Quotation(newQuote, newCategory, newTitle, newCharacter, newYear);
    console.log("Quotation added");
    return quotations.push(newQuotation);
}

function removeAllQuotes(){
    var toHide = document.getElementById("toHide displayQuotes");
    toHide.classList.add("hide");
}

function displayQuotes(){
    var allQuotes = document.getElementById("toHide displayQuotes");
    allQuotes.id = "toHide displayQuotes";
    allQuotes.classList.remove("hide");
    
    quotations.forEach(function(quotation){
        document.getElementById("displayQuotes-inside").innerHTML += quotation.describe();
    });

    // Comment if you don't want to display it in the console.
    console.log("Here's the list of all your quotes :");
    quotations.forEach(function(quotation){
        console.log(quotation.describe());
    });
}

function removeRandomQuotes(){
    var toHide = document.getElementById("toHide randomQuote");
    toHide.classList.add("hide");
}

function randowQuotes(){
    var numberOfQuotes = "";
    numberOfQuotes = prompt('How many quotes do you want ? :');
    
    var randomQuotes = document.getElementById("toHide randomQuote");
    randomQuotes.id = "toHide randomQuote";
    randomQuotes.classList.remove("hide");
    
    // for (var i = 0; i < numberOfQuotes; i++) {
    //     var count = 0;
    //     for (var j = 0; j < Math.floor(Math.random() * 20); j++) {
    //         count++;
    //     }
    //     console.log(count);
    // }




    for (var counter = 0; counter < numberOfQuotes; counter++) {

        var quotation = quotations[Math.floor(Math.random()*quotations.length)];
        document.getElementById("display-random-quotes").innerHTML += quotation.describe();
    
        // counter = counter + 1; // the counter variable changes within the loop body
        console.log(counter);
    }
    
    console.log(quotation.describe());
}

// Program
function quotesProgram(){
    presentChoices();
    var valeur = document.getElementById("valeur").value
    if(valeur > 3 || valeur < 0){
        console.log("You can't write this number. Please, try again.")
        quotesProgram();
    }else if (valeur === "1"){
        displayQuotes();
    }else if (valeur === "2"){
        randowQuotes();
    }else if(valeur === "3"){
        displayForm();
    }
    return;
}