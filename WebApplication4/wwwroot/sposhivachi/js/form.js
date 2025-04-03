document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const form = document.getElementById('sposhivachiForm');
    const title = document.getElementById('formTitle');

    if (id) {
        title.textContent = 'Редагувати споживача';
        await loadSposhivachi(id);
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        await saveSposhivachi();
    });
});

async function loadSposhivachi(id) {
    try {
        const response = await fetch(`/api/Sposhivachi/${id}`);
        const data = await response.json();

        document.getElementById('id').value = data.id;
        document.getElementById('nazvaOrganizachia').value = data.nazvaOrganizachia;
        document.getElementById('adresa').value = data.adresa;
        document.getElementById('telefon').value = data.telefon;
    } catch (error) {
        console.error('Помилка завантаження споживача:', error);
    }
}

async function saveSposhivachi() {
    const id = document.getElementById('id').value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `/api/Sposhivachi/${id}` : '/api/Sposhivachi';

    const data = {
        nazvaOrganizachia: document.getElementById('nazvaOrganizachia').value,
        adresa: document.getElementById('adresa').value,
        telefon: document.getElementById('telefon').value
    };

    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            window.location.href = '/sposhivachi/index.html';
        }
    } catch (error) {
        console.error('Помилка збереження споживача:', error);
    }
}