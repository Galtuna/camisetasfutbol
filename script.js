// Variables globales
let shirts = [];
let currentShirt = null;

// Cargar datos al iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadShirts();
    setupEventListeners();
});

// Cargar datos de las camisetas
async function loadShirts() {
    try {
        const response = await fetch('data.json');
        shirts = await response.json();
        renderGallery(shirts);
    } catch (error) {
        console.error('Error cargando las camisetas:', error);
        document.getElementById('gallery').innerHTML = 
            '<p style="grid-column: 1/-1; text-align: center; color: #00d4aa;">Error al cargar las camisetas</p>';
    }
}

// Renderizar galería
function renderGallery(items) {
    const gallery = document.getElementById('gallery');
    const noResults = document.getElementById('noResults');

    if (items.length === 0) {
        gallery.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    gallery.style.display = 'grid';
    noResults.style.display = 'none';
    gallery.innerHTML = items.map((shirt, index) => `
        <div class="card" onclick="openModal(${index})">
            <img src="${shirt.images[0]}" alt="${shirt.team}" class="card-image">
            <div class="card-content">
                <div class="card-title">${shirt.team}</div>
                <div class="card-details">
                    <div class="card-detail">
                        <span class="card-label">Marca:</span>
                        <span class="card-value">${shirt.brand}</span>
                    </div>
                    <div class="card-detail">
                        <span class="card-label">Temporada:</span>
                        <span class="card-value">${shirt.season}</span>
                    </div>
                    ${shirt.country && shirt.country.trim() !== '' ? `
                    <div class="card-detail">
                        <span class="card-label">País:</span>
                        <span class="card-value">${shirt.country}</span>
                    </div>
                    ` : ''}
                    <div class="card-detail">
                        <span class="card-label">Equipación:</span>
                        <span class="card-value">${shirt.kit}</span>
                    </div>
                    <div class="card-detail">
                        <span class="card-label">Talla:</span>
                        <span class="card-value">${shirt.size}</span>
                    </div>
                    ${shirt.number !== 0 ? `
                    <div class="card-detail">
                        <span class="card-label">Número:</span>
                        <span class="card-value">${shirt.number}</span>
                    </div>
                    ` : ''}
                    ${shirt.playerName ? `
                    <div class="card-detail">
                        <span class="card-label">Jugador:</span>
                        <span class="card-value">${shirt.playerName}</span>
                    </div>
                    ` : ''}
                </div>
                <div class="card-footer">
                    <button class="view-btn">Ver detalles</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Configurar event listeners
function setupEventListeners() {
    // Buscador
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // Botón limpiar
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        renderGallery(shirts);
    });

    // Modal
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Búsqueda
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        renderGallery(shirts);
        return;
    }

    const filtered = shirts.filter(shirt => {
        const matchTeam = shirt.team.toLowerCase().includes(searchTerm);
        const matchBrand = shirt.brand.toLowerCase().includes(searchTerm);
        const matchSeason = shirt.season.toLowerCase().includes(searchTerm);
        const matchCountry = shirt.country.toLowerCase().includes(searchTerm);
        const matchKit = shirt.kit.toLowerCase().includes(searchTerm);
        const matchSize = shirt.size.toLowerCase().includes(searchTerm);
        const matchNumber = shirt.number.toString().includes(searchTerm);
        const matchPlayerName = shirt.playerName && 
                               shirt.playerName.toLowerCase().includes(searchTerm);

        return matchTeam || matchBrand || matchSeason || matchCountry || matchKit || matchSize || matchNumber || matchPlayerName;
    });

    renderGallery(filtered);
}

// Abrir modal
function openModal(index) {
    currentShirt = shirts[index];
    const modal = document.getElementById('modal');
    
    // Llenar información
    document.getElementById('modalTeam').textContent = currentShirt.team;
    document.getElementById('modalBrand').textContent = currentShirt.brand;
    document.getElementById('modalSeason').textContent = currentShirt.season;
    
    // Mostrar país solo si no está vacío
    const countryRow = document.getElementById('modalCountryRow');
    if (currentShirt.country && currentShirt.country.trim() !== '') {
        countryRow.style.display = 'block';
        document.getElementById('modalCountry').textContent = currentShirt.country;
    } else {
        countryRow.style.display = 'none';
    }
    
    document.getElementById('modalKit').textContent = currentShirt.kit;
    document.getElementById('modalSize').textContent = currentShirt.size;
    
    // Mostrar número solo si no es 0
    const numberRow = document.getElementById('modalNumberRow');
    if (currentShirt.number !== 0) {
        numberRow.style.display = 'block';
        document.getElementById('modalNumber').textContent = currentShirt.number;
    } else {
        numberRow.style.display = 'none';
    }

    // Mostrar nombre del jugador solo si existe
    const nameRow = document.getElementById('modalNameRow');
    if (currentShirt.playerName) {
        nameRow.style.display = 'block';
        document.getElementById('modalName').textContent = currentShirt.playerName;
    } else {
        nameRow.style.display = 'none';
    }

    // Mostrar imagen principal
    setModalImage(0);

    // Crear miniaturas
    renderThumbnails();

    // Mostrar modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Establecer imagen del modal
function setModalImage(index) {
    const mainImage = document.getElementById('modalImage');
    mainImage.src = currentShirt.images[index];

    // Actualizar miniatura activa
    const thumbnails = document.querySelectorAll('.modal-thumbnail');
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Renderizar miniaturas
function renderThumbnails() {
    const container = document.getElementById('modalThumbnails');
    
    if (currentShirt.images.length <= 1) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'flex';
    container.innerHTML = currentShirt.images.map((img, index) => `
        <img 
            src="${img}" 
            alt="Miniatura ${index + 1}" 
            class="modal-thumbnail ${index === 0 ? 'active' : ''}"
            onclick="setModalImage(${index})"
        >
    `).join('');
}

// Permitir cerrar modal con tecla ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});
