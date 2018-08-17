// OPTION 1 : Refresh the page
// OPTION 2 : Display all the quotes - NOT RANDOMLY
// OPTION 3&4 : Choice between the two generators - RANDOM
// OPTION 5 : Add a quote
// CREATION OF THE QUOTES
// DISPLAY THE FORM
// CLEAN THE HTML Between each option
// DESCRIPTION of the Quote

// OPTION 1 :  Refresh the page
document.getElementById("refresh").addEventListener("click", refresh);
function refresh() {
    location.reload();
};

// OPTION 2 : Display all the quotes - NOT RANDOMLY
document.getElementById("displayAllQuotes").addEventListener("click", displayQuotes);
function displayQuotes(){
    clean();
    quotations.forEach(function(quotation){
        document.getElementById("result").innerHTML += quotation.describe();
    });
    quotations.forEach(function(quotation){
        var i=0;
        i++;
    });
};

// OPTION 3&4 : Display the Movies OR the Books RANDOMLY
document.getElementById("randomMovie").addEventListener("click", randomQuote);
document.getElementById("randomBook").addEventListener("click", randomQuote);
function randomQuote(){
    clean();
    var randomType = (this.name);
    var numberOfQuotes = "";
    numberOfQuotes = prompt('How many quotes do you want ? (between 1 and 5) :');
    if(numberOfQuotes > 5 || numberOfQuotes <= 0){
        console.log("You can't write this number. Please, try again.")
    }else { 
        const randomTypeClicked = quotations.filter(function(quotation){
            if(quotation.category === randomType){
                
                return true;
            }
        });
        for (var counter = 0; counter < numberOfQuotes; counter++) {
            var quote      = randomTypeClicked[Math.floor(Math.random()*randomTypeClicked.length)].quote;
            var character  = randomTypeClicked[Math.floor(Math.random()*randomTypeClicked.length)].character;
            var title      = randomTypeClicked[Math.floor(Math.random()*randomTypeClicked.length)].title;
            var year       = randomTypeClicked[Math.floor(Math.random()*randomTypeClicked.length)].year;
            document.getElementById("result").innerHTML += 
            `   <blockquote class="blockquote" id="display-random-quotes">
                    <p class="mb-0">${quote}</p>
                    <footer class="blockquote-footer">${character} <cite title="Source Title">${title} - ${year}</cite></footer>
                </blockquote>
            `;
        }
    }
};

// OPTION 5 : Add A quote
function createQuote(){
    var quote = document.getElementById("quote").value.toLowerCase()
    quote = capitalizeFirstLetter(quote);
    var category = document.getElementById("category").value;    
    var title = document.getElementById("title").value.toLowerCase();    
    title = capitalizeFirstLetter(title);    
    var character = document.getElementById("character").value.toLowerCase();    
    character = capitalizeFirstLetter(character);    
    var year = document.getElementById("year").value;    

    var newQuotation = new Quotation(quote,category, character, title, year);

    clean();
    document.getElementById("result").innerHTML += 
        `   <blockquote class="blockquote" id="display-random-quotes">
                The following quote has been added : <p class="mb-0">${quote}</p>
                <footer class="blockquote-footer">${character} <cite title="Source Title">${title} - ${year}</cite></footer>
            </blockquote>
        `;

    return quotations.push(newQuotation);
};
function capitalizeFirstLetter(info) {
    return info.charAt(0).toUpperCase() + info.slice(1);
};

// CREATION OF THE QUOTES
var quotations = new Array();
function Quotation(quote,category, character, title, year){
    this.quote      = quote;
    this.category   = category;
    this.character  = character;
    this.title      = title;
    this.year       = year;
};

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
    "Human speech is like a cracked kettle on which we tap crude rhythms for bears to dance to, while we long to make music that will melt the stars.",
    "Book",
    "Gustave Flaubert",
    "Madame Bovary",
    1993); 
var leHorla = new Quotation(
    "Oh shit this is cold! Shit, shit, shit.",
    "Book",
    "Jack Dawson",
    "Le Horla",
    1997); 
var semaineQuatre = new Quotation(
    "Je n’utilise pas seulement mes neurones mais tous ceux que je peux emprunter",
    "Book",
    "Tim Ferris",
    "La semaine de 4 heures",
    1995); 
var khadija = new Quotation(
    "With all the wonders Moses was performing, there was one I did not think would ever come to pass: that we would finally be reunited. That I would once again kiss his neck as I had loved to do. That I would see him clasp his sons to his breast.",
    "Book",
    "Marek Halter",
    "Khadija",
    1939); 
var fatima = new Quotation(
    "The more extreme the opening positions and the smaller the concessions, the more time and effort it will take to discover whether or not agreement is possible.",
    "Book",
    "Roger Fisher",
    "Getting to yes",
    1972); 
quotations.push(madameBovary);
quotations.push(leHorla);
quotations.push(semaineQuatre);
quotations.push(khadija);
quotations.push(fatima);

// Display the form
document.getElementById("displayForm").addEventListener("click", displayForm);
function displayForm(){
    clean();
    document.getElementById("result").innerHTML += 
    `
    <form>
        <div class="quote-head">
                <h1>Add your quote : </h1>
                <button class="cross toRemove" id="removeForm">&#10005;</button>	
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="quote">Your quote</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="quote" placeholder="Here, My super quote.">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="category">Category</label>
            <div class="col-sm-10">
                <select class="form-control" id="category">
                    <option value="Movie">Movie</option>
                    <option value="Book">Book</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="title">Title</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="title" placeholder="Titanic">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="character">Character</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="character" placeholder="Romeo">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="year">Year</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="year" placeholder="1998">
            </div>
        </div>
        <div class="footer">
                <button type="submit" onclick="createQuote()">Validate</button>
                <button id="removeForm">Discard</button>
        </div>
    </form>
    `;
};

// CLEAN THE HTML Between each option
function clean(){
    document.getElementById("result").innerHTML = '';
};
 
// DESCRIPTION of the Quote
Quotation.prototype.describe = function(){
    var description = 
        `   <blockquote class="blockquote" id="display-random-quotes">
                <p class="mb-0">${this.quote}</p>
                <footer class="blockquote-footer">${this.character} <cite title="Source Title">${this.title} - ${this.year}</cite></footer>
            </blockquote>
        `
    return description;
};