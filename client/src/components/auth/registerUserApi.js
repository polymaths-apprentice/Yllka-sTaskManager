const BASE_URL = 'http://localhost:5000';

async function registerUser(username) {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });
    return response.json();
  } catch (err) {
    console.error(err)
  }
}

export { registerUser };
