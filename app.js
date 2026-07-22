function openCategory(category) {

    let output = document.getElementById("output");

    if (category === "Factions") {
        output.innerHTML =
        "<h3>Factions</h3>" +
        "<p>Database entries will be added here.</p>";
    }

    else if (category === "Technology") {
        output.innerHTML =
        "<h3>Technology</h3>" +
        "<p>Technology archive currently under construction.</p>";
    }

    else if (category === "Weapons") {
        output.innerHTML =
        "<h3>Weapons</h3>" +
        "<p>Weapon database currently under construction.</p>";
    }

    else if (category === "HMCM") {
        output.innerHTML =
        "<h3>HMCM</h3>" +
        "<p>Heavy Military Combat Machine archive loading.</p>";
    }

}