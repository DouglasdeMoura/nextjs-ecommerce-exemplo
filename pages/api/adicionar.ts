import { ServerResponse } from 'http';
import { v4 as uuidv4 } from 'uuid';
import supabase from '../../services/supabase';

const handler = async (request, response: ServerResponse) => {
  if (request.method !== 'POST') { throw new Error(); }

  const {
    nome, preco, imagem, descricao,
  } = JSON.parse(request.body);

  // Validação
  const { error } = await supabase
    .from('produtos')
    .insert([
      {
        id: uuidv4(),
        nome,
        preco,
        imagem,
        descricao,
      },
    ]);
  if (error === null) { response.statusCode = 202; } else { response.statusCode = 500; }

  response.end();
};

export default handler;
