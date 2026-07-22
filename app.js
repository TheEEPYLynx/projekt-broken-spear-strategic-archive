let database = null;

fetch("database/database.json")
    .then(response => response.json())
    .then(data => {
        database = data;
        console.log("PBS Database Loaded");
    });


function openCategory(category) {

    let output = document.getElementById("output");

    if (!database) {
        output.innerHTML = "<p>Database loading...</p>";
        return;
    }


    if (category === "Factions") {

        output.innerHTML = "<h3>Factions</h3>";

        database.factions.forEach(item => {

            output.innerHTML +=
            `
            <p>
            <b>${item.name}</b> (${item.short})<br>
            ${item.description}
            </p>
            `;

        });

    }


    if (category === "Weapons") {

        output.innerHTML = "<h3>Weapons</h3>";

        database.weapons.forEach(item => {

            output.innerHTML +=
            `
            <p>
            <b>${item.name}</b><br>
            ${item.description}
            </p>
            `;

        });

    }


    if (category === "Technology") {

        output.innerHTML = "<h3>Technology</h3>";

        database.technology.forEach(item => {

            output.innerHTML +=
            `
            <p>
            <b>${item.name}</b><br>
            ${item.description}
            </p>
            `;

        });

    }


    if (category === "HMCM") {

        output.innerHTML =
        `
        <h3>HMCM Archive</h3>
        <p>
        Heavy Military Combat Machine database.
        Entries pending.
        </p>
        `;

    }

}