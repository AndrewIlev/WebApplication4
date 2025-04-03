document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        await loadProduktiDetails(id);
    } else {
        document.getElementById('detailsContent').innerHTML = '<p>Продукт не знайдено</p>';
    }
});

async function loadProduktiDetails(id) {
    try {
        const response = await fetch(`/api/Produkti/${id}`);
        const data = await response.json();

        document.getElementById('detailsContent').innerHTML = `
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Назва:</strong> ${data.nazvaProdukcia}</p>
            <p><strong>Ціна:</strong> ${data.price} грн</p>
            <p><strong>Кількість:</strong> ${data.quantity}</p>
        `;
    } catch (error) {
        console.error('Помилка завантаження деталей продукту:', error);
        document.getElementById('detailsContent').innerHTML = '<p>Помилка завантаження даних</p>';
    }
}