'use strict';

document.getElementById("refresh").addEventListener("click", refresh);

function refresh() {
    location.reload();
}

document.getElementById("displayAllQuotes").addEventListener("click", displayAllQuotes);

function displayAllQuotes(){
    var allQuotes = document.getElementById("toHide displayQuotes");
    allQuotes.id = "toHide displayQuotes";
    allQuotes.classList.remove("hide");
    
    quotationsList.forEach(function(quotation){
        document.getElementById("displayQuotes-inside").innerHTML += quotation.QuotationsStore.describe();
    });

    console.log("Here's the list of all your quotes :");
    quotationsList.forEach(function(quotation){
        var i=0;
        i++;
        console.log(quotation.describe());
    });
};




document.getElementById("randomQuotes").addEventListener("click", randomQuotes);
document.getElementById("displayForm").addEventListener("click", displayForm);
document.getElementById("quotesProgram").addEventListener("click", quotesProgram);
document.getElementById("removeForm").addEventListener("click", removeForm);
document.getElementById("createQuote").addEventListener("click", createQuote);
//document.getElementById("toRemove").addEventListener("click", toRemove);
document.getElementById("removeAllQuotes").addEventListener("click", removeAllQuotes);
document.getElementById("removeForm").addEventListener("click", removeForm);
document.getElementById("removeRandomQuotes").addEventListener("click", removeRandomQuotes);

var quotations = new Array();

function Quotation(type, quotes, characters, titles, years){
    this.type        = type;
    this.characters  = characters;
    this.quotes      = quotes;
    this.titles      = titles;
    this.years       = years;
};

class Quote{
    constructor(character, quote, title, year){
        this.character = character;
        this.quote = quote;
        this.title = title;
        this.year = year;
    }
};

class QuotationsStore {
    constructor(){
        this.quotationsList = [];
    }

    add(quotations){
        this.quotationsList.push(quotations);
    }

    initialStorage(){
        const moviesQuotes = new Quotation('Movie',
        [
            'On devient pas chef',
	        'Nous on est Celtes',
	        'Une fois j\'ai dormi avec un porc',
	        'Tu peux préparer les outils',
	        'Tu devais aller en Germanie',
	        'Vous connaissez pas le jeu du pélican',
	        'Croyez moi, c\'est pour votre bien',
	        'C\'est vous qui faites du bruit',
	        'Donc si je comprend bien',
	        'Il faut quand même qu\'on sache sur quel pied danser'
        ],
        [
            ' parcequ\'on le mérite',
	        ' une seule année dans la légion',
	        ' pendant une semaine',
	        ', allez trouve un Breton',
	        ', je connais à mort',
	        ' si vous préférez pas jouer à autre chose ',
	        ', ça va être la grande rigolade pendant quatre jours',
	        ', je savais pas que c\'était aussi clair',
	        ', vous voyez bien que c\'est un piège',
	        ' faites pas celui qu\'est pas au courant'
        ],
        [
            ' andouille !',
	        ', ça peut encore s\'arranger...',
	        ', je serais vous, je lancerais des recherches.',
	        ', c’est moi qui paye l’orchestre.',
	        ', c\'est vrai ou c\'est pas vrai ?',
	        ', une petite partie de dés ça peut pas nous faire de mal.',
	        ', ça doit venir du fait qu\'on marche...',
	        ', pas de vannes, pas de réflexions...',
	        ', hé ben, c\'est pas gentil, voila.',
	        ' bah je sais pas comment vous faites, moi je pourrais pas.'
        ],
        [
            ' andouille !',
	        ', ça peut encore s\'arranger...',
	        ', je serais vous, je lancerais des recherches.',
	        ', c’est moi qui paye l’orchestre.',
	        ', c\'est vrai ou c\'est pas vrai ?',
	        ', une petite partie de dés ça peut pas nous faire de mal.',
	        ', ça doit venir du fait qu\'on marche...',
	        ', pas de vannes, pas de réflexions...',
	        ', hé ben, c\'est pas gentil, voila.',
	        ' bah je sais pas comment vous faites, moi je pourrais pas.'
        ]);
        const booksQuotes = new Quotation('Books',
        [
            'Dans la vie on ne fait pas ce que l\'on veut', 
			'La vie est un mystère qu\'il faut vivre', 
			'On passe une moitié de sa vie à attendre', 
			'La vie, c\'est comme une bicyclette', 
			'Dans la nature, tout a toujours une raison',
			'Notre plus grande gloire n\'est point de tomber', 
			'Certains ont l\'air honnête', 
			'Etre libre, ce n\'est pas seulement se débarrasser de ses chaînes', 
			'Le courage, c\'est de comprendre sa propre vie', 
			'L\'éducation ne se borne pas à l\'enfance'
        ],
        [
            ' mais on est responsable', 
			'. Non pas tant à cause de ceux qui font le mal', 
			' mais donne autant de lumière qu\'un sourire', 
			' ils ne se rendent jamais compte de leurs souffrances', 
			', tout obstacle renforce la détermination',
			', je cherche à comprendre les questions', 
			' car la promesse est une dette', 
			', c\'est quand tout fonctionne et que personne ne sait pourquoi', 
			' mais j\'en suis fier', 
			' et s\'attendre à un résultat différent'
        ],
        [
            ' à cause de ceux qui regardent et laissent faire.', 
			' pour ne pas perdre l\'équilibre.', 
			' un seul jour de votre vie.', 
			', ça n\'est pas forcément le pot qui est vide.', 
			', les enfants sont des tyrans.',
			' chaque fois que nous tombons.', 
			' mais la capacité de la vaincre.', 
			', tout le reste c\'est de travers.', 
			'. Il n\'y a que de mauvais cultivateurs.', 
			'. J\'avais déjà du mal avec la main !'
        ],
        [
            ' à cause de ceux qui regardent et laissent faire.', 
			' pour ne pas perdre l\'équilibre.', 
			' un seul jour de votre vie.', 
			', ça n\'est pas forcément le pot qui est vide.', 
			', les enfants sont des tyrans.',
			' chaque fois que nous tombons.', 
			' mais la capacité de la vaincre.', 
			', tout le reste c\'est de travers.', 
			'. Il n\'y a que de mauvais cultivateurs.', 
			'. J\'avais déjà du mal avec la main !'
        ]);
        this.add(moviesQuotes);
        this.add(booksQuotes);
        console.log(booksQuotes);
    }

    describe(){
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
};

class QuoteGenerator {
    

};


//Quotation.prototype.describe = function(){
//    var description = 
//        `   <tr class="parent">
//                <td class="child">${this.quote}</td>
//                <td class="child">${this.category}</td>
//                <td class="child">${this.character}</td>
//                <td class="child">${this.title}</td>
//                <td class="child">${this.year}</td>
//            </tr>
//        `
//    return description;
//}


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

