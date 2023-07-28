const BASE_URL = 'http://localhost:5000';

async function updateTaskApi(taskId, updatedTask) {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
    return response;
  }

  
export { updateTaskApi};