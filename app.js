let database = null;


fetch("database/database.json")
.then(response => response.json())
.then(data => {

    database = data;
    console.log("PBS Database Loaded");

});


function openArticle(id) {

    let output = document.getElementById("output");

    let article = database.articles[id];


    if (!article) {

        output.innerHTML = "<p>Article unavailable.</p>";
        return;

    }


    output.innerHTML = `

    <h2>${article.title}</h2>

    <p><b>Category:</b> ${article.category}</p>

    <p>${article.overview}</p>

    <hr>

    `;


    for (let section in article.sections) {

        output.innerHTML += `

        <h3>${section}</h3>

        <p>${article.sections[section]}</p>

        `;

    }


    output.innerHTML += "<hr><h3>Related Articles</h3>";


    article.links.forEach(link => {

        output.innerHTML += `

        <button onclick="openArticle('${link}')">
        Open ${database.articles[link].title}
        </button>

        `;

    });


}