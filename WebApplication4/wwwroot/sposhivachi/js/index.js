document.addEventListener('DOMContentLoaded', async function () {
    await loadSposhivachi();
});

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
                    <a href="form.html?id=${item.id}" class="btn btn-sm btn-warning">Редагувати</a>
                    <button onclick="deleteSposhivachi(${item.id})" class="btn btn-sm btn-danger">Видалити</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Помилка завантаження споживачів:', error);
    }
}

async function deleteSposhivachi(id) {
    if (!confirm('Ви впевнені, що хочете видалити цього споживача?')) return;

    try {
        await fetch(`/api/Sposhivachi/${id}`, { method: 'DELETE' });
        await loadSposhivachi();
    } catch (error) {
        console.error('Помилка видалення споживача:', error);
    }
}