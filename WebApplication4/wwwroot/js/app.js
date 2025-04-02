document.addEventListener('DOMContentLoaded', function () {
    loadPostachannia();

    const form = document.getElementById('postachanniaForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

async function loadPostachannia() {
    try {
        const response = await fetch('/api/Postachannia');
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        renderPostachanniaTable(data);
    } catch (error) {
        console.error('Error loading data:', error);
        alert('Помилка завантаження даних');
    }
}

function renderPostachanniaTable(data) {
    const tableBody = document.querySelector('#postachanniaTable tbody');
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nazvaProdukcia}</td>
            <td>${item.kilkist}</td>
            <td>${new Date(item.dataVidpravlenna).toLocaleDateString()}</td>
            <td>
                <a href="/form.html?id=${item.id}" class="btn btn-primary">Редагувати</a>
                <button onclick="deletePostachannia(${item.id})" class="btn btn-danger">Видалити</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

async function deletePostachannia(id) {
    if (!confirm('Ви впевнені, що хочете видалити цей запис?')) return;

    try {
        const response = await fetch(`/api/Postachannia/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadPostachannia();
        } else {
            throw new Error('Delete failed');
        }
    } catch (error) {
        console.error('Error deleting item:', error);
        alert('Помилка видалення');
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const id = form.dataset.id || '';
    const method = id ? 'PUT' : 'POST';
    const url = id ? `/api/Postachannia/${id}` : '/api/Postachannia';

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData))
        });

        if (response.ok) {
            window.location.href = '/index.html';
        } else {
            const error = await response.json();
            showValidationErrors(error.errors);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Помилка збереження даних');
    }
}

function showValidationErrors(errors) {
   
    document.querySelectorAll('.validation-error').forEach(el => el.remove());

 
    for (const [field, messages] of Object.entries(errors)) {
        const input = document.querySelector(`[name="${field}"]`);
        if (input) {
            const errorContainer = document.createElement('div');
            errorContainer.className = 'validation-error';
            errorContainer.textContent = messages.join(', ');
            input.parentNode.appendChild(errorContainer);
        }
    }
}

function setupEditButtons() {
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = `/form.html?id=${btn.dataset.id}`;
        });
    });
}
function renderTable(data) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.nazvaProdukcia}</td>
            <td>
                <button class="btn btn-sm btn-warning btn-edit" data-id="${item.id}">Редагувати</button>
                <button class="btn btn-sm btn-danger" onclick="deleteItem(${item.id})">Видалити</button>
            </td>
        </tr>
    `).join('');
    setupEditButtons();
}

window.deletePostachannia = deletePostachannia;