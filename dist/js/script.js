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

// Code to handle install prompt on desktop

var deferredPrompt;
var addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';
console.log('btn :' + addBtn);
window.addEventListener('beforeinstallprompt', function (e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault(); // Stash the event so it can be triggered later.

  deferredPrompt = e; // Update UI to notify the user they can add to home screen
  ///showInstallPromotion();

  addBtn.style.display = 'block';
  addBtn.addEventListener('click', function (e) {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none'; // Show the prompt

    deferredPrompt.prompt(); // Wait for the user to respond to the prompt

    deferredPrompt.userChoice.then(function (choiceResult) {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }

      deferredPrompt = null;
    });
  });
});
