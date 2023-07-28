const express = require('express');
const router = require('./routes');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', router);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TaskManager',
      version: '1.0.0',
      description: 'Description of your API',
    },
    components: {
      schemas: {
        Task: {
          type: 'object',
          properties: {
            task_id: {
                type: 'string',
                description: 'The unique identifier of the task',
              },
              task_name: {
                type: 'string',
                description: 'The name of the task',
              },
              due_date: {
                type: 'string',
                format: 'date',
                description: 'The due date of the task',
              },
              username: {
                type: 'string',
                description: 'The username associated with the task',
              },
              category: {
                type: 'string',
                description: 'The category of the task',
              },
          },
        },
        Error: {
          type: 'object',
          properties: {
            error: {
                type: 'string',
                description: 'Error message',
              },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));



app.listen(5000, () => console.log('Server up on port 5000'));
