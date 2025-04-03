class ApiService {
    static async get(entity) {
        const response = await fetch(`/api/${entity}`);
        return await response.json();
    }

    static async getById(entity, id) {
        const response = await fetch(`/api/${entity}/${id}`);
        return await response.json();
    }

    static async create(entity, data) {
        const response = await fetch(`/api/${entity}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    static async update(entity, id, data) {
        const response = await fetch(`/api/${entity}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        return response.ok;
    }

    static async delete(entity, id) {
        const response = await fetch(`/api/${entity}/${id}`, {
            method: 'DELETE'
        });
        return response.ok;
    }
}