document.addEventListener('DOMContentLoaded', function () {
    loadPostachannia();
    loadProdukti();
    loadSposhivachi();
});

// Завантаження поставок
async function loadPostachannia() {
    try {
        const response = await fetch('/api/Postachannia');
        const data = await response.json();
        const table = document.getElementById('postachanniaTable');

        table.innerHTML = data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.nazvaProdukcia}</td>
                <td>${item.kilkist}</td>
                <td>${item.kodProdukcia}</td>
                <td>
                    <a href="/postachannia/form.html?id=${item.id}" class="btn btn-sm btn-warning">Редагувати</a>
                    <button onclick="deletePostachannia(${item.id})" class="btn btn-sm btn-danger">Видалити</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Помилка завантаження поставок:', error);
    }
}

// Завантаження продуктів
async function loadProdukti() {
    try {
        const response = await fetch('/api/Produkti');
        const data = await response.json();
        const table = document.getElementById('produktiTable');

        table.innerHTML = data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.nazvaProdukcia}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>
                    <a href="/produkti/form.html?id=${item.id}" class="btn btn-sm btn-warning">Редагувати</a>
                    <button onclick="deleteProdukti(${item.id})" class="btn btn-sm btn-danger">Видалити</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Помилка завантаження продуктів:', error);
    }
}

// Завантаження споживачів
async function loadSposhivachi() {
    try {
        const response = await fetch('/api/Sposhivachi');
        const data = await response.json();
        const table = document.getElementById('sposhivachiTable');

        table.innerHTML = data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.nazvaOrganizachia}</td>
                <td>${item.adresa}</td>
                <td>${item.telefon}</td>
                <td>
                    <a href="/sposhivachi/form.html?id=${item.id}" class="btn btn-sm btn-warning">Редагувати</a>
                    <button onclick="deleteSposhivachi(${item.id})" class="btn btn-sm btn-danger">Видалити</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Помилка завантаження споживачів:', error);
    }
}

// Видалення поставки
async function deletePostachannia(id) {
    if (!confirm('Ви впевнені, що хочете видалити цю поставку?')) return;

    try {
        await fetch(`/api/Postachannia/${id}`, { method: 'DELETE' });
        loadPostachannia();
    } catch (error) {
        console.error('Помилка видалення поставки:', error);
    }
}

// Видалення продукту
async function deleteProdukti(id) {
    if (!confirm('Ви впевнені, що хочете видалити цей продукт?')) return;

    try {
        await fetch(`/api/Produkti/${id}`, { method: 'DELETE' });
        loadProdukti();
    } catch (error) {
        console.error('Помилка видалення продукту:', error);
    }
}

// Видалення споживача
async function deleteSposhivachi(id) {
    if (!confirm('Ви впевнені, що хочете видалити цього споживача?')) return;

    try {
        await fetch(`/api/Sposhivachi/${id}`, { method: 'DELETE' });
        loadSposhivachi();
    } catch (error) {
        console.error('Помилка видалення споживача:', error);
    }
}