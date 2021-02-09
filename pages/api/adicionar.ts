import { ServerResponse } from 'http';
import { v4 as uuidv4 } from 'uuid';
import supabase from '../../services/supabase';

const handler = async (request, response: ServerResponse) => {
  if (request.method !== 'POST') { throw new Error(); }

  // Validação
  await supabase
    .from('produtos')
    .insert([
      {
        id: uuidv4(),
        nome: request.body.nome,
        preco: request.body.preco,
        imagem: request.body.imagem,
        descricao: request.body.descricao,
      },
    ]);

  response.statusCode = 202;
  response.end();
};

export default handler;
