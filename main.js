let quote = document.querySelector('#quote');
let author = document.querySelector('#author');

function quoteOfTheDay() { 
    fetch("https://quotable.io/random")
    .then (res => res.json())
    .then (data => {
        quote.innerHTML = '"'+data.content+'"';
        author.innerHTML = '~'+data.author;
    })
    
    quote.style.opacity = '1';
    author.style.opacity = '1';
}

function textCopy() {
    quoteToCopy = document.getElementById('quote');
    authorToCopy = document.getElementById('author');
    copyAlert = document.getElementById('copyAlert');

    navigator.clipboard.writeText(quoteToCopy.innerHTML+" "+authorToCopy.innerHTML);

    copyAlert.style.opacity = '1';
    setTimeout(function () {
        copyAlert.style.opacity = '0';
    }, 1500);
}
