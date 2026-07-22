const CACHE_NAME = "pbs-archive-v1";

const filesToCache = [
    "index.html",
    "styles.css",
    "app.js",
    "manifest.json",
    "database/database.json"
];


self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => {

            return cache.addAll(filesToCache);

        })

    );

});


self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
        .then(response => {

            return response || fetch(event.request);

        })

    );

});