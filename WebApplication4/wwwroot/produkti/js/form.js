document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const form = document.getElementById('produktiForm');
    const title = document.getElementById('formTitle');

    if (id) {
        title.textContent = 'Редагувати продукт';
        await loadProdukti(id);
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        await saveProdukti();
    });
});

async function loadProdukti(id) {
    try {
        const response = await fetch(`/api/Produkti/${id}`);
        const data = await response.json();

        document.getElementById('id').value = data.id;
        document.getElementById('nazvaProdukcia').value = data.nazvaProdukcia;
        document.getElementById('price').value = data.price;
        document.getElementById('quantity').value = data.quantity;
    } catch (error) {
        console.error('Помилка завантаження продукту:', error);
    }
}

async function saveProdukti() {
    const id = document.getElementById('id').value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `/api/Produkti/${id}` : '/api/Produkti';

    const data = {
        nazvaProdukcia: document.getElementById('nazvaProdukcia').value,
        price: parseFloat(document.getElementById('price').value),
        quantity: parseInt(document.getElementById('quantity').value)
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
            window.location.href = '/produkti/index.html';
        }
    } catch (error) {
        console.error('Помилка збереження продукту:', error);
    }
}