document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const form = document.getElementById('postachanniaForm');
    const title = document.getElementById('formTitle');

    if (id) {
        title.textContent = 'Редагувати поставку';
        await loadPostachannia(id);
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        await savePostachannia();
    });
});

async function loadPostachannia(id) {
    try {
        const response = await fetch(`/api/Postachannia/${id}`);
        const data = await response.json();

        document.getElementById('id').value = data.id;
        document.getElementById('nazvaProdukcia').value = data.nazvaProdukcia;
        document.getElementById('kilkist').value = data.kilkist;
        document.getElementById('kodProdukcia').value = data.kodProdukcia;
        document.getElementById('kodSposhivacha').value = data.kodSposhivacha;
    } catch (error) {
        console.error('Помилка завантаження поставки:', error);
    }
}

async function savePostachannia() {
    const id = document.getElementById('id').value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `/api/Postachannia/${id}` : '/api/Postachannia';

    const data = {
        nazvaProdukcia: document.getElementById('nazvaProdukcia').value,
        kilkist: parseInt(document.getElementById('kilkist').value),
        kodProdukcia: parseInt(document.getElementById('kodProdukcia').value),
        kodSposhivacha: parseInt(document.getElementById('kodSposhivacha').value)
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
            window.location.href = '/postachannia/index.html';
        }
    } catch (error) {
        console.error('Помилка збереження поставки:', error);
    }
}