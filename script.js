// Creation of the quotations
class QuotationRepository {
    constructor(){
        this.quotationTable = [];
    }
    add(quotationSample){
        this.quotationTable.push(quotationSample);
    }
};

class QuotationSample {
    constructor(category, quote, character, title, year){
        this.category   = category;
        this.quote      = quote;
        this.character  = character;
        this.title      = title;
        this.year       = year;    
    };

    fillQuoteStorage(){
        const movies = new QuotationSample('Movie',     
        [
            'Your scientists were so preoccupied with whether they could, they didn\'t stop to think if they should.',
            'Oh shit this is cold! Shit, shit, shit.',
            'Shut up ! Just shut up, you idiot!',
            'Frankly, my dear, I don\'t give a damn.',
            'I\'m going to make him an offer he can\'t refuse.',
        ],
        [
            'Ian Malcom',
            'Jack Dawson',
            'Woody',
            'Rhett Butler',
            'Don Corleone',
        ],
        [
            'Jurassic Park',
            'Titanic',
            'Toy Story',
            'Gone With the Wind',
            'The Godfather'
        ],
        [
            1993,
            1997,
            1995,
            1939,
            1972
        ]
        );
    
        const books = new QuotationSample('Book',
        [
            'Human speech is like a cracked kettle on which we tap crude rhythms for bears to dance to, while we long to make music that will melt the stars.',
            'Oh shit this is cold! Shit, shit, shit.',
            'Je n\'utilise pas seulement mes neurones mais tous ceux que je peux emprunter',
            'With all the wonders Moses was performing, there was one I did not think would ever come to pass: that we would finally be reunited. That I would once again kiss his neck as I had loved to do. That I would see him clasp his sons to his breast.',
            'The more extreme the opening positions and the smaller the concessions, the more time and effort it will take to discover whether or not agreement is possible.',
        ],
        [
            'Gustave Flaubert',
            'Jack Dawson',
            'Tim Ferris',
            'Marek Halter',
            'Roger Fisher',
        ],
        [
            'Madame Bovary',
            'Le Horla',
            'La semaine de 4 heures',
            'Khadija',
            'Getting to yes',
        ],
        [
            1993,
            1997,
            1995,
            1939,
            1972
        ]
        );

        this.XXXXXX.add(movies);
        this.XXXXXX.add(books);
    };
    
};




// OPTION 1 :  Refresh the page
document.getElementById("refresh").addEventListener("click", refresh);
function refresh() {
    location.reload();
}

// OPTION 2 : Display all the quotes in a table - NOT RANDOMLY
document.getElementById("displayAllQuotes").addEventListener("click", displayQuotes);
function displayQuotes(){
    var allQuotes = document.getElementById("toHide displayQuotes");
    allQuotes.id = "toHide displayQuotes";
    allQuotes.classList.remove("hide");
    
    quotations.forEach(function(quotation){
        document.getElementById("displayQuotes-inside").innerHTML += quotation.describe();
    });

    quotations.forEach(function(quotation){
        var i=0;
        i++;
    });
}

// OPTION 3&4 : Display the Movies OR the Books Randomly
document.getElementById("randomMovie").addEventListener("click", randomQuote);
document.getElementById("randomBook").addEventListener("click", randomQuote);

function randomQuote(){
    var randomType = (this.name);
    var numberOfQuotes = "";
    numberOfQuotes = prompt('How many quotes do you want ? (between 1 and 5) :');
    if(numberOfQuotes > 5 || numberOfQuotes <= 0){
        console.log("You can't write this number. Please, try again.")
    }else { 
        var randomQuotes = document.getElementById("toHide randomQuote");
        randomQuotes.id = "toHide randomQuote";
        randomQuotes.classList.remove("hide");
        
        const randomTypeClicked = quotations.filter(function(quotation){
            if(quotation.category === randomType){
                console.log(randomTypeClicked);
                return true;
            }
        });

        for (var counter = 0; counter < numberOfQuotes; counter++) {
            var quoteR      = randomTypeClicked[Math.floor(Math.random()*randomTypeClicked.length)].quote;
            var characterR  = randomTypeClicked[Math.floor(Math.random()*randomTypeClicked.length)].character;
            var titleR      = randomTypeClicked[Math.floor(Math.random()*randomTypeClicked.length)].title;
            var yearR       = randomTypeClicked[Math.floor(Math.random()*randomTypeClicked.length)].year;
            document.getElementById("display-random-quotes").innerHTML += 
            `   <p class="mb-0">${quoteR}</p>
                <footer class="blockquote-footer">${characterR} <cite title="Source Title">${titleR} - ${yearR}</cite></footer>
            `;
        }
    }
}

// OPTION 5 : Add a quote
document.getElementById("displayForm").addEventListener("click", displayForm);
function displayForm(){
    var createQuotes = document.getElementById("toHide createQuote");
    createQuotes.id = "toHide createQuote";
    createQuotes.classList.remove("hide");    
}

document.getElementById("createQuote").addEventListener("click", createQuote);
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
}


document.getElementById("quotesProgram").addEventListener("click", quotesProgram);
document.getElementById("removeForm").addEventListener("click", removeForm);
document.getElementById("removeAllQuotes").addEventListener("click", removeAllQuotes);
document.getElementById("removeForm").addEventListener("click", removeForm);
document.getElementById("removeRandomQuotes").addEventListener("click", removeRandomQuotes);








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



function removeAllQuotes(){
    var toHide = document.getElementById("toHide displayQuotes");
    toHide.classList.add("hide");
    document.getElementById("displayQuotes-inside").innerHTML = "";
}



function removeRandomQuotes(){
    var toHide = document.getElementById("toHide randomQuote");
    toHide.classList.add("hide");
    document.getElementById("display-random-quotes").innerHTML = "";
}

//Quotation.prototype.describe = function(){
//    var description = 
//        `   <tr class="parent">
//                <td class="child">${this.quote}</td>
//                <td class="child">${this.category}</td>
//                <td class="child">${this.character}</td>
//                <td class="child">${this.title}</td>
//                <td class="child">${this.year}</td>
//            </tr>
//       `
//    return description;
//}









function quotesProgram(){
    var valeur = document.getElementById("valeur").value
    if(valeur > 4 || valeur < 0){
        console.log("You can't write this number. Please, try again.")
    }else if (valeur === "1"){
        displayQuotes();
    }else if (valeur === "2"){
        randomMovie();
    }else if (valeur === "3"){
        randomBook();
    }else if(valeur === "4"){
        displayForm();
    }else{
        refresh();
    }
    return;
}

