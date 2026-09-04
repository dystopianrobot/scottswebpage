/* 
window.addEventListener('load', () => {
  const popupOverlay = document.getElementById('popup-overlay');
  const closeButton = document.getElementById('close-popup');

  // Show the pop-up after 30 seconds (30,000 milliseconds)
  setTimeout(() => {
    popupOverlay.classList.add('active');
  }, 30000);

  // Close pop-up when clicking the "X" button
  closeButton.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
  });

  // Optional: Close pop-up when clicking anywhere outside the content box
  popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
      popupOverlay.classList.remove('active');
    }
  });
});
*/
