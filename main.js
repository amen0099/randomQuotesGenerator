var url = "https://type.fit/api/quotes";

function fetchquotes() {
    fetch(url)
    .then(response => response.json())
    .then(quoteList => {
        const random = Math.floor(Math.random() * quoteList.length);
        const quoteText = quoteList[random].text;
        let auth = quoteList[random].author;
        if (!auth) auth = "Anonymous";
        
        const myQuote = document.getElementById('quote');
        const myAuthor = document.getElementById('author');
        
        myQuote.textContent = quoteText;
        myAuthor.textContent = auth;
    })  
    .catch(error => {
        console.log(error);
    });
}
