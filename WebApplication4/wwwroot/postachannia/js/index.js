document.addEventListener('DOMContentLoaded', async function () {
    await loadPostachannia();
});

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
                    <a href="form.html?id=${item.id}" class="btn btn-sm btn-warning">Редагувати</a>
                    <button onclick="deletePostachannia(${item.id})" class="btn btn-sm btn-danger">Видалити</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Помилка завантаження поставок:', error);
    }
}

async function deletePostachannia(id) {
    if (!confirm('Ви впевнені, що хочете видалити цю поставку?')) return;

    try {
        await fetch(`/api/Postachannia/${id}`, { method: 'DELETE' });
        await loadPostachannia();
    } catch (error) {
        console.error('Помилка видалення поставки:', error);
    }
}