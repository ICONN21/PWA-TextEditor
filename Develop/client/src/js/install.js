const butInstall = document.getElementById('buttonInstall');

// Hold the `beforeinstallprompt` event so it can be triggered later
let deferredPrompt;

// Add an event listener for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();

  // Store the event so it can be triggered later
  deferredPrompt = event;

  // Show the install button
  butInstall.style.display = 'block';

  butInstall.addEventListener('click', async () => {
    // Hide the install button once it's clicked
    butInstall.style.display = 'none';

    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }

      // Clear the deferredPrompt variable, as it can only be used once
      deferredPrompt = null;
    }
  });
});

// Add an event listener for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed');
  // You can add additional logic here, like hiding the install button or showing a "Thank you" message
  butInstall.style.display = 'none';
});
