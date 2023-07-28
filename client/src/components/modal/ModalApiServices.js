const BASE_URL = 'http://localhost:5000';

async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/categories`);
  const data = await response.json();
  return data.rows.map((row) => row.category);
}

async function postData(data) {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response;
}

async function editData(taskId, data) {
  const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response;
}

export { fetchCategories, postData, editData };
