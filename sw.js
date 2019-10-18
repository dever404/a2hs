alert('sw');
self.addEventListener('fetch', function(event) {
    alert('fetch');
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            alert('response');
            if (response) {
            return response;
            }
            return fetch(event.request);
        }
        )
    );
});
