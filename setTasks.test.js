const { addTask } = require('./controller');
const { mockRequest, mockResponse } = require('jest-mock-req-res');
const pool = require('./database');

jest.mock('uuid', () => ({
  v4: jest.fn(() => 'mock-task-id'), 
}));

describe('addTask', () => {
  it('should add a new task and return a success message', async () => {
    const req = mockRequest({
      body: {
        task_name: 'Task 1',
        due_date: '2023-12-31',
        username: 'user1',
        category: 'Category 1',
        description: 'Description for Task 1',
      },
    });
    const res = mockResponse();

    pool.query = jest.fn().mockResolvedValueOnce();

    await addTask(req, res);

    expect(pool.query).toHaveBeenCalledWith(
      expect.any(String),
      [
        'mock-task-id',
        'Task 1',
        '2023-12-31',
        'user1',
        'Category 1',
        'Description for Task 1',
      ]
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Task added successfully.' });
  });

  it('should handle errors and return a 500 status code', async () => {
    const req = mockRequest({
      body: {
        task_name: 'Task 1',
        due_date: '2023-12-31',
        username: 'user1',
        category: 'Category 1',
        description: 'Description for Task 1',
      },
    });
    const res = mockResponse();

    pool.query = jest.fn().mockRejectedValueOnce(new Error('Database error'));

    await addTask(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred while adding the task.' });
  });
});
