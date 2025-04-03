document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        await loadSposhivachiDetails(id);
    } else {
        document.getElementById('detailsContent').innerHTML = '<p>Споживача не знайдено</p>';
    }
});

async function loadSposhivachiDetails(id) {
    try {
        const response = await fetch(`/api/Sposhivachi/${id}`);
        const data = await response.json();

        document.getElementById('detailsContent').innerHTML = `
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Організація:</strong> ${data.nazvaOrganizachia}</p>
            <p><strong>Адреса:</strong> ${data.adresa}</p>
            <p><strong>Телефон:</strong> ${data.telefon || 'Не вказано'}</p>
        `;
    } catch (error) {
        console.error('Помилка завантаження деталей споживача:', error);
        document.getElementById('detailsContent').innerHTML = '<p>Помилка завантаження даних</p>';
    }
}