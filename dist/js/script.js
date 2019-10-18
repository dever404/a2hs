alert('service js');

if ('serviceWorker' in navigator) {
    alert('serviceWorker load');
    navigator.serviceWorker.register('/a2hs/sw.js')
    .then(function (reg) {
        console.log("Service Worker registered ",reg); // console.log(reg);
    }).catch(function (err) {
        console.error("Service Worker fial ",err); // console.error(err);
    });
}  
else {
     alert('Your browser does not support the Service-Worker!');
}
