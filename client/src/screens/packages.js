document.addEventListener('DOMContentLoaded', function() {
    const packageCards = document.querySelectorAll('.package-card');
  
    packageCards.forEach(function(card) {
      card.addEventListener('click', function() {
        const packageName = card.querySelector('h4').innerText;
        alert('You selected the ' + packageName + ' package.');
      });
    });
  });
  