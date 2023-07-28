const BASE_URL = 'http://localhost:5000';

async function deleteTaskApi(taskId) {
  const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: 'DELETE',
  });
  return response;
}

export {deleteTaskApi};