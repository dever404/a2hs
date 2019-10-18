alert('service js');

if ('serviceWorker' in navigator) {
//if(window.isSecureContext){
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

// Detects if device is on iOS 
var isIos = function isIos() {
  var userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
}; // Detects if device is in standalone mode


var isInStandaloneMode = function isInStandaloneMode() {
  return 'standalone' in window.navigator && window.navigator.standalone;
}; // Checks if should display install popup notification:


if (isIos() && !isInStandaloneMode()) {
  (void 0).setState({
    showInstallMessage: true
  });
}
