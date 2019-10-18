console.log('service js');

if ('serviceWorker' in navigator) {
//if(window.isSecureContext){
    console.log('serviceWorker load');
    navigator.serviceWorker.register('/a2hs/sw.js')
    .then(function (reg) {
        console.log("Service Worker registered "); // console.log(reg);
    }).catch(function (err) {
       console.log("Service Worker fial "); // console.error(err);
    });
}  
else {
     console.log('Your browser does not support the Service-Worker!');
}
