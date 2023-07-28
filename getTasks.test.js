const { getTasks } = require('./controller');
const { mockRequest, mockResponse } = require('jest-mock-req-res');
const pool = require('./database');

const mockTasks = [
  {id:'1',
     task_name: 'Task 1',
  due_date: '2023-12-31',
  username: 'user1',
  category: 'Category 1',
  description: 'Description for Task 1' },
  { id:'2',
  task_name: 'Task 2',
due_date: '2023-12-31',
username: 'user1',
category: 'Category 2',
description: 'Description for Task 2'},
];

describe('getTasks', () => {
  it('should return tasks for a specific username', async () => {
    const req = mockRequest({ params: { username: 'user1' } });
    const res = mockResponse();

    pool.query = jest.fn().mockResolvedValueOnce({ rows: mockTasks });
    await getTasks(req, res);

    expect(res.json).toHaveBeenCalledWith(mockTasks);
    expect(res.status).not.toHaveBeenCalled();
  });

  it('should handle errors and return a 500 status code', async () => {
    const req = mockRequest({ params: { username: 'user1' } });
    const res = mockResponse();

    pool.query = jest.fn().mockRejectedValueOnce(new Error('Database error'));
    await getTasks(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred while fetching tasks.' });
  });
});
