document.addEventListener('DOMContentLoaded', async function () {
    await loadProdukti();
});

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
                    <a href="form.html?id=${item.id}" class="btn btn-sm btn-warning">Редагувати</a>
                    <button onclick="deleteProdukti(${item.id})" class="btn btn-sm btn-danger">Видалити</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Помилка завантаження продуктів:', error);
    }
}

async function deleteProdukti(id) {
    if (!confirm('Ви впевнені, що хочете видалити цей продукт?')) return;

    try {
        await fetch(`/api/Produkti/${id}`, { method: 'DELETE' });
        await loadProdukti();
    } catch (error) {
        console.error('Помилка видалення продукту:', error);
    }
}