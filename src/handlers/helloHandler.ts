'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from Lambda!',
        statusCode: 200,
        input: event,
      },
      null,
      2
    ),
  };
}