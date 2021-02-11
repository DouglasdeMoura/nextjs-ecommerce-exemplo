const handler = async (request, response) => {
  if (request.method !== 'POST') {
    response.statusCode = 405;
    response.end();
  }
  /*
  const {
    email, password,
  } = request.body;
  */

  response.statusCode = 200;
  response.json('1232asdf123123412.123412341234asdfasdf123.123412asdfasdf341234');
  response.end();
};

export default handler;
