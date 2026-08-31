// ==========================================
// Alfaaz By Zaman
// Service Worker
// Basic Offline Cache
// ==========================================

const CACHE_NAME =
    "alfaaz-by-zaman-v9";


const FILES_TO_CACHE = [

    "./",
    "./index.html",
    "./style.css",
    "./manifest.json",

    "./assets/icon-192.png",
    "./assets/icon-512.png",

    "./js/database.js",
    "./js/category.js",
    "./js/main.js"

];

// ==========================================
// Install
// ==========================================

self.addEventListener(
    "install",
    function(event){

        event.waitUntil(

            caches
                .open(CACHE_NAME)
                .then(function(cache){

                    return cache.addAll(
                        FILES_TO_CACHE
                    );

                })

        );

        self.skipWaiting();

    }
);


// ==========================================
// Activate
// ==========================================

self.addEventListener(
    "activate",
    function(event){

        event.waitUntil(

            caches
                .keys()
                .then(function(cacheNames){

                    return Promise.all(

                        cacheNames.map(
                            function(cacheName){

                                if(
                                    cacheName !==
                                    CACHE_NAME
                                ){

                                    return caches.delete(
                                        cacheName
                                    );

                                }

                            }
                        )

                    );

                })

        );

        self.clients.claim();

    }
);


// ==========================================
// Fetch
// ==========================================

self.addEventListener(
    "fetch",
    function(event){

        if(
            event.request.method !==
            "GET"
        ){
            return;
        }


        event.respondWith(

            caches
                .match(event.request)
                .then(function(cachedResponse){

                    if(cachedResponse){

                        return cachedResponse;

                    }


                    return fetch(
                        event.request
                    );

                })

        );

    }
);
