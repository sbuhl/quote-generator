 function presentChoices(){
     console.log("1: List of quotes")
     console.log("2: Random quote")
     console.log("3: Add quote")
     console.log("0: Quit")
 }
document.getElementById("displayQuotes").addEventListener("click", displayQuotes);
document.getElementById("randomMovie").addEventListener("click", randomMovie);
document.getElementById("randomBook").addEventListener("click", randomBook);

document.getElementById("displayForm").addEventListener("click", displayForm);
document.getElementById("quotesProgram").addEventListener("click", quotesProgram);
document.getElementById("removeForm").addEventListener("click", removeForm);
document.getElementById("createQuote").addEventListener("click", createQuote);
//document.getElementById("toRemove").addEventListener("click", toRemove);
document.getElementById("removeAllQuotes").addEventListener("click", removeAllQuotes);
document.getElementById("removeForm").addEventListener("click", removeForm);
document.getElementById("removeRandomQuotes").addEventListener("click", removeRandomQuotes);

var quotations = new Array();
function Quotation(quote, category, character, title, year){
    this.quote      = quote;
    this.category   = category;
    this.character  = character;
    this.title      = title;
    this.year       = year;
}

// Creation of the five first Movies
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

// Creation of the five first Book
var madameBovary = new Quotation(
    "Your scientists were so preoccupied with whether they could, they didn't stop to think if they should.",
    "Book",
    "Ian Malcom",
    "Madame Bovary",
    1993); 
var leHorla = new Quotation(
    "Oh shit this is cold! Shit, shit, shit.",
    "Book",
    "Jack Dawson",
    "Le Horla",
    1997); 
var semaineQuatre = new Quotation(
    "Shut up ! Just shut up, you idiot!",
    "Book",
    "Woody",
    "La semaine de 4 heures",
    1995); 
var khadija = new Quotation(
    "Frankly, my dear, I don't give a damn.",
    "Book",
    "Rhett Butler",
    "Khadija",
    1939); 
var fatima = new Quotation(
    "I'm going to make him an offer he can't refuse.",
    "Book",
    "Don Corleone",
    "Fatima",
    1972); 
quotations.push(madameBovary);
quotations.push(leHorla);
quotations.push(semaineQuatre);
quotations.push(khadija);
quotations.push(fatima);

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
    });
    console.table(quotations);

}

function removeRandomQuotes(){
    var toHide = document.getElementById("toHide randomQuote");
    toHide.classList.add("hide");
    document.getElementById("display-random-quotes").innerHTML = "";
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

function randomMovie(){
    var numberOfQuotes = "";
    numberOfQuotes = prompt('How many quotes do you want ? (between 1 and 5) :');
    if(numberOfQuotes > 5 || numberOfQuotes <= 0){
        console.log("You can't write this number. Please, try again.")
        randomQuotes();
    }else { 
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
            var quoteR = films[Math.floor(Math.random()*films.length)].quote;
            var characterR = films[Math.floor(Math.random()*films.length)].character;
            var categoryR = films[Math.floor(Math.random()*films.length)].category;
            var titleR = films[Math.floor(Math.random()*films.length)].title;
            var yearR = films[Math.floor(Math.random()*films.length)].year;
            console.log(quoteR, characterR, titleR, yearR);
            document.getElementById("display-random-quotes").innerHTML += 
            `   <tr class="parent">
                    <td class="child">${quoteR}</td>
                    <td class="child">${categoryR}</td>
                    <td class="child">${characterR}</td>
                    <td class="child">${titleR}</td>
                    <td class="child">${yearR}</td>
                </tr>
            `;
        }
    }
}

function randomBook(){
    var numberOfQuotes = "";
    numberOfQuotes = prompt('How many quotes do you want ? (between 1 and 5) :');
    if(numberOfQuotes > 5 || numberOfQuotes <= 0){
        console.log("You can't write this number. Please, try again.")
        randomQuotes();
    }else { 
    
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
            var quoteR = livres[Math.floor(Math.random()*livres.length)].quote;
            var characterR = livres[Math.floor(Math.random()*livres.length)].character;
            var categoryR = livres[Math.floor(Math.random()*livres.length)].category;
            var titleR = livres[Math.floor(Math.random()*livres.length)].title;
            var yearR = livres[Math.floor(Math.random()*livres.length)].year;
            console.log(quoteR, characterR, titleR, yearR);
            document.getElementById("display-random-quotes").innerHTML += 
            `   <tr class="parent">
                    <td class="child">${quoteR}</td>
                    <td class="child">${categoryR}</td>
                    <td class="child">${characterR}</td>
                    <td class="child">${titleR}</td>
                    <td class="child">${yearR}</td>
                </tr>
            `;
        }
    }

}

function refresh() {
    location.reload();
}

function quotesProgram(){
    presentChoices();
    var valeur = document.getElementById("valeur").value
    if(valeur > 3 || valeur < 0){
        console.log("You can't write this number. Please, try again.")
        quotesProgram();
    }else if (valeur === "1"){
        displayQuotes();
    }else if (valeur === "2"){
        randomQuotes();
    }else if(valeur === "3"){
        displayForm();
    }else{
        refresh();
    }
    return;
}

