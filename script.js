$(document).ready(function(){
	  let currentSlide = 0;
	  const slides = $('.carousel-slide');
	  const numberOfSlides = slides.length;

	  // function showSlide(index) {
		// slides.fadeOut(900).eq(index).fadeIn(1000);
	  // }

	  function showSlide(index) {
	    slides.filter(':visible').fadeOut(600, function() {
			slides.eq(index).fadeIn(900);
		});
	  }

	  function nextSlide() {
		currentSlide = (currentSlide + 1) % numberOfSlides;
		showSlide(currentSlide);
	  }

	  function prevSlide() {
		currentSlide = (currentSlide - 1 + numberOfSlides) % numberOfSlides;
		showSlide(currentSlide);
	  }

	  // Écouteurs d'événements pour les boutons
	  $('.prev').click(function() {
		prevSlide();
	  });

	  $('.next').click(function() {
		nextSlide();
	  });

	  // Gestion des événements de survol pour changer les images des boutons
	  $('.carousel-control').hover(
		function() { // mouse enter
		  $(this).find('.normal').hide();
		  $(this).find('.hover').show();
		},
		function() { // mouse leave
		  $(this).find('.hover').hide();
		  $(this).find('.normal').show();
		}
	  );

	  // Changez la diapositive toutes les 4000 millisecondes (4 secondes)
	  setInterval(nextSlide, 8000);
	  
	  
	  
	 // Sélectionne toutes les divs avec la classe 'feature'
    var features = document.querySelectorAll('.feature');

    // Boucle sur chaque 'feature' pour ajouter les écouteurs d'événements
    features.forEach(function(feature) {
        feature.addEventListener('mouseover', function() {
            // Sélectionne l'image à l'intérieur de la div survolée et applique la rotation
            var img = this.querySelector('img');
            img.style.transform = 'rotate(90deg)';
            img.style.transition = 'transform 0.5s ease';
        });

        feature.addEventListener('mouseout', function() {
            // Sélectionne l'image et revient à la position initiale
            var img = this.querySelector('img');
            img.style.transform = 'rotate(0deg)';
        });
    });
	
});

