import supabase from '../../services/supabase';

const handler = async (_, response) => {
  const { data: produtos } = await supabase
    .from('produtos')
    .select('*');

  response.json({
    body: produtos,
  });
};

export default handler;
