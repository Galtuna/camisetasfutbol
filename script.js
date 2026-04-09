// Variables globales
let shirts = [];
let currentShirt = null;
let currentPage = 1;
let itemsPerPage = 12;
let filteredShirts = [];
let currentPreviewIndex = 0;

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
        filteredShirts = shirts;
        currentPage = 1;
        renderGallery();
    } catch (error) {
        console.error('Error cargando las camisetas:', error);
        document.getElementById('gallery').innerHTML = 
            '<p style="grid-column: 1/-1; text-align: center; color: #00d4aa;">Error al cargar las camisetas</p>';
    }
}

// Renderizar galería
function renderGallery() {
    const gallery = document.getElementById('gallery');
    const noResults = document.getElementById('noResults');
    const pagination = document.getElementById('pagination');

    if (filteredShirts.length === 0) {
        gallery.style.display = 'none';
        noResults.style.display = 'block';
        pagination.style.display = 'none';
        return;
    }

    gallery.style.display = 'grid';
    noResults.style.display = 'none';

    // Calcular índices
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredShirts.slice(startIndex, endIndex);

    // Necesito el índice original para openModal
    gallery.innerHTML = paginatedItems.map((shirt) => {
        const originalIndex = shirts.indexOf(shirt);
        return `
        <div class="card" onclick="openModal(${originalIndex})">
            <img src="${shirt.images[0]}" alt="${shirt.team}" class="card-image">
            <div class="card-content">
                <div class="card-title">${shirt.team}</div>
                <div class="card-details">
                    <div class="card-detail">
                        <span class="card-label">Temporada:</span>
                        <span class="card-value">${shirt.season}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="view-btn">Ver detalles</button>
                </div>
            </div>
        </div>
    `;
    }).join('');

    // Renderizar paginación
    renderPagination();
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
        filteredShirts = shirts;
        currentPage = 1;
        renderGallery();
    });

    // Modal
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const modalImage = document.getElementById('modalImage');
    const previewOverlay = document.getElementById('imagePreview');
    const previewClose = document.querySelector('.close-preview');
    const prevArrow = document.querySelector('.preview-arrow.prev');
    const nextArrow = document.querySelector('.preview-arrow.next');
    
    closeBtn.addEventListener('click', closeModal);
    modalImage.addEventListener('click', openImagePreview);
    previewClose.addEventListener('click', closeImagePreview);
    prevArrow.addEventListener('click', showPreviewPrevious);
    nextArrow.addEventListener('click', showPreviewNext);
    previewOverlay.addEventListener('click', (event) => {
        if (event.target === previewOverlay) {
            closeImagePreview();
        }
    });

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
        filteredShirts = shirts;
    } else {
        filteredShirts = shirts.filter(shirt => {
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
    }
    
    currentPage = 1;
    renderGallery();
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
        countryRow.style.display = 'flex';
        document.getElementById('modalCountry').textContent = currentShirt.country;
    } else {
        countryRow.style.display = 'none';
    }
    
    document.getElementById('modalKit').textContent = currentShirt.kit;
    document.getElementById('modalSize').textContent = currentShirt.size;
    
    // Mostrar número solo si no es 0
    const numberRow = document.getElementById('modalNumberRow');
    if (currentShirt.number !== 0) {
        numberRow.style.display = 'flex';
        document.getElementById('modalNumber').textContent = currentShirt.number;
    } else {
        numberRow.style.display = 'none';
    }

    // Mostrar nombre del jugador solo si existe
    const nameRow = document.getElementById('modalNameRow');
    if (currentShirt.playerName) {
        nameRow.style.display = 'flex';
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

function openImagePreview() {
    const previewOverlay = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const modalImage = document.getElementById('modalImage');
    currentPreviewIndex = currentShirt.images.findIndex((img) => img === modalImage.src);
    if (currentPreviewIndex === -1) {
        currentPreviewIndex = 0;
    }
    previewImage.src = currentShirt.images[currentPreviewIndex];
    previewOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    updatePreviewArrows();
}

function closeImagePreview() {
    const previewOverlay = document.getElementById('imagePreview');
    previewOverlay.style.display = 'none';
    const modal = document.getElementById('modal');
    document.body.style.overflow = modal.style.display === 'block' ? 'hidden' : 'auto';
}

function showPreviewPrevious(event) {
    event.stopPropagation();
    if (currentPreviewIndex > 0) {
        currentPreviewIndex -= 1;
        updatePreviewImage();
    }
}

function showPreviewNext(event) {
    event.stopPropagation();
    if (currentPreviewIndex < currentShirt.images.length - 1) {
        currentPreviewIndex += 1;
        updatePreviewImage();
    }
}

function updatePreviewImage() {
    const previewImage = document.getElementById('previewImage');
    previewImage.src = currentShirt.images[currentPreviewIndex];
    updatePreviewArrows();
}

function updatePreviewArrows() {
    const prevArrow = document.querySelector('.preview-arrow.prev');
    const nextArrow = document.querySelector('.preview-arrow.next');
    const imageCount = currentShirt.images.length;

    if (imageCount <= 1) {
        prevArrow.style.display = 'none';
        nextArrow.style.display = 'none';
    } else {
        prevArrow.style.display = 'flex';
        nextArrow.style.display = 'flex';
        prevArrow.disabled = currentPreviewIndex === 0;
        nextArrow.disabled = currentPreviewIndex === imageCount - 1;
    }
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

// Permitir cerrar modal o vista ampliada con tecla ESC y navegar con flechas
document.addEventListener('keydown', (event) => {
    const previewOverlay = document.getElementById('imagePreview');
    const isPreviewOpen = previewOverlay.style.display === 'flex';

    if (event.key === 'Escape') {
        if (isPreviewOpen) {
            closeImagePreview();
        } else {
            closeModal();
        }
    }

    if (isPreviewOpen) {
        if (event.key === 'ArrowLeft') {
            showPreviewPrevious(event);
        }
        if (event.key === 'ArrowRight') {
            showPreviewNext(event);
        }
    }
});

// Renderizar paginación
function renderPagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredShirts.length / itemsPerPage);

    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }

    pagination.style.display = 'flex';
    pagination.innerHTML = '';

    // Botón anterior
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '← Anterior';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) goToPage(currentPage - 1);
    });
    pagination.appendChild(prevBtn);

    // Números de página
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
        const firstBtn = document.createElement('button');
        firstBtn.textContent = '1';
        firstBtn.addEventListener('click', () => goToPage(1));
        pagination.appendChild(firstBtn);

        if (startPage > 2) {
            const dots = document.createElement('span');
            dots.textContent = '...';
            dots.style.color = 'var(--text-secondary)';
            dots.style.alignSelf = 'center';
            pagination.appendChild(dots);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.classList.toggle('active', i === currentPage);
        btn.addEventListener('click', () => goToPage(i));
        pagination.appendChild(btn);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const dots = document.createElement('span');
            dots.textContent = '...';
            dots.style.color = 'var(--text-secondary)';
            dots.style.alignSelf = 'center';
            pagination.appendChild(dots);
        }

        const lastBtn = document.createElement('button');
        lastBtn.textContent = totalPages;
        lastBtn.addEventListener('click', () => goToPage(totalPages));
        pagination.appendChild(lastBtn);
    }

    // Botón siguiente
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Siguiente →';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) goToPage(currentPage + 1);
    });
    pagination.appendChild(nextBtn);

    // Información de página
    const info = document.createElement('span');
    info.className = 'page-info';
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, filteredShirts.length);
    info.textContent = `Mostrando ${start}-${end} de ${filteredShirts.length}`;
    pagination.appendChild(info);
}

// Cambiar a página específica
function goToPage(page) {
    const totalPages = Math.ceil(filteredShirts.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderGallery();
        // Scroll arriba
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
