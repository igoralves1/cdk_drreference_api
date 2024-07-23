const {
  crateUserServices,
  updateUserServices,
  getUserServices,
  listUsersServices,
} = require('../service/users.services');

exports.handler = async function (event) {
  const method = event.httpMethod;
  const path = event.path;
  const pathParameters = event.pathParameters || {};
  const queryStringParameters = event.queryStringParameters || {};
  const body = JSON.parse(event.body || '{}');

  let response;

  try {
    if (path === '/user/createuser' && method === 'POST') {
      const res = await crateUserServices(body);
      response = {
        statusCode: 201,
        body: JSON.stringify({ data: res }),
      };
    } else if (path === '/user/updateuser' && method === 'PUT') {
      const res = await updateUserServices(body);
      response = {
        statusCode: 200,
        body: JSON.stringify({ data: res }),
      };
    } else if (path === '/user/listuser' && method === 'GET') {
      const res = await listUsersServices(queryStringParameters);
      response = {
        statusCode: 200,
        body: JSON.stringify({
          data: res,
        }),
      };
    } else if (path.startsWith('/user/getuser/') && method === 'GET') {
      const userId = pathParameters.id;
      const res = await getUserServices(userId);
      response = {
        statusCode: 200,
        body: JSON.stringify({ message: `User ${userId} fetched` }),
      };
    } else if (path.startsWith('/user/listuser/') && method === 'GET') {
      const offset = pathParameters.start;
      const limit = pathParameters.end;
      const res = await listUsersServices(limit, offset);
      response = {
        statusCode: 200,
        body: JSON.stringify({
          data: res,
        }),
      };
    } else {
      response = {
        statusCode: 404,
        body: JSON.stringify({ message: 'Route not found' }),
      };
    }
  } catch (error) {
    response = {
      statusCode: 500,
      body: JSON.stringify({
        message: 'An error occurred',
        error: error.message,
      }),
    };
  }

  return response;
};
