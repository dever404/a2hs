console.log('service js');
if ('serviceWorker' in navigator) {
    console.log('serviceWorker load');
    navigator.serviceWorker.register('/a2hs/sw.js')
    .then(function (reg) {
        console.log("Service Worker registered ",reg); // console.log(reg);
    }).catch(function (err) {
        console.error("Service Worker fial ",err); // console.error(err);
    });
}  
