document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu a');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const closePopup = document.querySelector('.close');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showPopup(section);
        });
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    function showPopup(section) {
        let text = '';
        switch (section) {
            case 'inicio':
                text = 'Bienvenido a la sección de Inicio.';
                break;
            case 'nosotros':
                text = 'Información sobre Nosotros.';
                break;
            case 'mision':
                text = 'Nuestra Misión.';
                break;
            case 'vision':
                text = 'Nuestra Visión.';
                break;
            case 'contacto':
                text = 'Información de Contacto.';
                break;
            case 'ubicacion':
                text = 'Nuestra Ubicación.';
                break;
            default:
                text = 'Sección no encontrada.';
        }
        popupText.textContent = text;
        popup.style.display = 'block';
    }

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);

        fetch('contacto.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('Datos enviados exitosamente');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});