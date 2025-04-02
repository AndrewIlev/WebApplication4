document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('postachannia-form');
    const serverError = document.getElementById('server-error');
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Завантаження даних для редагування
    if (id) {
        document.getElementById('form-title').textContent = 'Редагувати поставку';
        loadPostachannia(id);
    }

    // Валідація форми
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearErrors();

        if (!validateForm()) {
            return;
        }

        try {
            const data = {
                nazvaProdukcia: document.getElementById('nazvaProdukcia').value.trim(),
                kilkist: parseInt(document.getElementById('kilkist').value),
                kodProdukcia: parseInt(document.getElementById('kodProdukcia').value) || 0,
                kodSposhivacha: parseInt(document.getElementById('kodSposhivacha')?.value) || 0,
                dataVidpravlenna: document.getElementById('dataVidpravlenna')?.value || new Date().toISOString()
            };

            const url = id ? `/api/Postachannia/${id}` : '/api/Postachannia';
            const method = id ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(
                    errorData.title ||
                    errorData.message ||
                    `HTTP error! Status: ${response.status}`
                );
            }

            window.location.href = '/index.html';
        } catch (error) {
            console.error('Помилка при відправці форми:', error);
            showServerError(error.message);
        }
    });

    function validateForm() {
        let isValid = true;
        const fields = [
            {
                element: document.getElementById('nazvaProdukcia'),
                errorElement: document.getElementById('nazva-error'),
                validate: (value) => !!value.trim(),
                message: 'Введіть назву продукції'
            },
            {
                element: document.getElementById('kilkist'),
                errorElement: document.getElementById('kilkist-error'),
                validate: (value) => parseInt(value) > 0,
                message: 'Кількість має бути більше 0'
            }
        ];

        fields.forEach(({ element, errorElement, validate, message }) => {
            if (!element) return;

            if (!validate(element.value)) {
                errorElement.textContent = message;
                isValid = false;
            }
        });

        return isValid;
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        serverError.classList.add('d-none');
    }

    function showServerError(message) {
        serverError.textContent = typeof message === 'string'
            ? message
            : 'Сталася невідома помилка';
        serverError.classList.remove('d-none');
        serverError.scrollIntoView({ behavior: 'smooth' });
    }

    async function loadPostachannia(id) {
        try {
            const response = await fetch(`/api/Postachannia/${id}`, {
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Не вдалося завантажити дані: ${response.status}`);
            }

            const data = await response.json();
            document.getElementById('nazvaProdukcia').value = data.nazvaProdukcia || '';
            document.getElementById('kilkist').value = data.kilkist || '';
            document.getElementById('kodProdukcia').value = data.kodProdukcia || '';

            if (document.getElementById('kodSposhivacha')) {
                document.getElementById('kodSposhivacha').value = data.kodSposhivacha || '';
            }
            if (document.getElementById('dataVidpravlenna')) {
                document.getElementById('dataVidpravlenna').value =
                    data.dataVidpravlenna?.split('T')[0] || '';
            }
        } catch (error) {
            console.error('Помилка завантаження даних:', error);
            showServerError('Не вдалося завантажити дані для редагування');
        }
    }
});