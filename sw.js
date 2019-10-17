console.log('sw');
self.addEventListener('fetch', function(event) {
    console.log('fetch');
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            console.log('response');
            if (response) {
            return response;
            }
            return fetch(event.request);
        }
        )
    );
});