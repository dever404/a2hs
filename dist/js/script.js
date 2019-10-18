alert('service js');

//if ('serviceWorker' in navigator) {
if(window.isSecureContext){
    alert('serviceWorker load');
    navigator.serviceWorker.register('/a2hs/sw.js')
    .then(function (reg) {
        alert("Service Worker registered "); // console.log(reg);
    }).catch(function (err) {
       alert("Service Worker fial "); // console.error(err);
    });
}  
else {
     alert('Your browser does not support the Service-Worker!');
}
