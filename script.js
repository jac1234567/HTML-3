// Agregar JavaScript para cambiar de sección
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Eliminar clase 'active' de todas las secciones y añadir 'd-none' para ocultarlas
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
            section.classList.add('d-none');
        });
        
        // Mostrar la sección correspondiente y añadir la clase 'active'
        const sectionId = this.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        section.classList.remove('d-none');
        section.classList.add('active');
        
        // Cambiar la clase 'active' en el enlace
        document.querySelectorAll('.nav-link').forEach(navItem => {
            navItem.classList.remove('active');
        });
        this.classList.add('active');
    });
});