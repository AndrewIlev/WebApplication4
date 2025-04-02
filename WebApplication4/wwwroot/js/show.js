document.addEventListener('DOMContentLoaded', async () => {
    const id = new URLSearchParams(window.location.search).get('id');
    if (!id) window.location.href = '/index.html';

    try {
        const response = await fetch(`/api/Postachannia/${id}`);
        if (!response.ok) throw new Error('Запис не знайдено');

        const data = await response.json();
        document.getElementById('postachannia-details').innerHTML = `
            <p><strong>Назва:</strong> ${data.nazvaProdukcia}</p>
            <p><strong>Кількість:</strong> ${data.kilkist}</p>
            <!-- Інші поля -->
        `;
    } catch (error) {
        console.error(error);
        alert('Помилка завантаження даних');
    }
});