document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        await loadPostachanniaDetails(id);
    } else {
        document.getElementById('detailsContent').innerHTML = '<p>Поставку не знайдено</p>';
    }
});

async function loadPostachanniaDetails(id) {
    try {
        const response = await fetch(`/api/Postachannia/${id}`);
        const data = await response.json();

        document.getElementById('detailsContent').innerHTML = `
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Назва продукції:</strong> ${data.nazvaProdukcia}</p>
            <p><strong>Кількість:</strong> ${data.kilkist}</p>
            <p><strong>Код продукції:</strong> ${data.kodProdukcia}</p>
            <p><strong>Код споживача:</strong> ${data.kodSposhivacha}</p>
            <p><strong>Дата відправлення:</strong> ${new Date(data.dataVidpravlenna).toLocaleDateString()}</p>
        `;
    } catch (error) {
        console.error('Помилка завантаження деталей поставки:', error);
        document.getElementById('detailsContent').innerHTML = '<p>Помилка завантаження даних</p>';
    }
}