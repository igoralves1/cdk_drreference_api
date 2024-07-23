exports.handler = async function(event) {
  const method = event.httpMethod;
  const pathParameters = event.pathParameters;
  const queryStringParameters = event.queryStringParameters;
  const body = JSON.parse(event.body || "{}");

  let response;

  switch (method) {
    case 'GET':
      response = {
        statusCode: 200,
        body: JSON.stringify({ message: "GET request received", pathParameters, queryStringParameters }),
      };
      break;
    case 'POST':
      response = {
        statusCode: 200,
        body: JSON.stringify({ message: "POST request received", body }),
      };
      break;
    case 'PUT':
      response = {
        statusCode: 200,
        body: JSON.stringify({ message: "PUT request received", body }),
      };
      break;
    case 'DELETE':
      response = {
        statusCode: 200,
        body: JSON.stringify({ message: "DELETE request received", pathParameters }),
      };
      break;
    default:
      response = {
        statusCode: 405,
        body: JSON.stringify({ message: "Method not allowed" }),
      };
  }

  return response;
};