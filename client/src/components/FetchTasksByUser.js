const BASE_URL = 'http://localhost:5000';

async function fetchTasksByUser(username) {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${username}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('An error occurred while fetching tasks.');
  }
}

export { fetchTasksByUser };