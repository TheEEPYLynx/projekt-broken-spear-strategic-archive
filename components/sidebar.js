function createSidebar() {

    return `
        <div id="sidebar">

            <h2>PBS Archive</h2>

            <button onclick="openArticle('kcs')">KCS</button>

            <button onclick="openArticle('hmcm')">HMCM</button>

            <button onclick="openArticle('sow')">SOW</button>

        </div>
    `;

}