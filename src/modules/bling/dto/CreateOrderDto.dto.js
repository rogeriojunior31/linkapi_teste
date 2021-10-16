const jsontoxml = require("jsontoxml");

class CreateOrderDto{
  transform(data){
    let order = {
      pedido: [
        {
          name: 'cliente',
          children: [
            {
              name: 'nome',
              text: data.org_id.name ? data.org_id.name : 'Company',
            },
            { name: 'tipoPessoa', text: 'J' },
            { name: 'endereco', text: 'Av. Mutinga' },
            { name: 'ie_rg', text: '507263532' },
            { name: 'numero', text: '3545' },
            { name: 'bairro', text: 'Mutinga' },
            { name: 'cep', text: '05110-000' },
            { name: 'cidade', text: 'Sao Paulo' },
            { name: 'uf', text: 'SP' },
            { name: 'fone', text: '5481153381' },
            {
              name: 'email',
              text: data.org_id.cc_email || 'linkapi_teste@teste.com',
            },
          ],
        },
        {
          name: 'transporte',
          children: [
            { name: 'transportadora', text: 'Transportadora 546' },
            { name: 'tipo_frete', text: 'R' },
            { name: 'servico_correios', text: 'SEDEX - CONTRATO' },
            {
              name: 'dados_etiqueta',
              children: [
                { name: 'nome', text: 'Endereco de entrega' },
                { name: 'endereco', text: 'Rua Visconde de Sao Gabriel' },
                { name: 'numero', text: '392' },
                { name: 'complemento', text: 'Sala 59' },
                { name: 'municipio', text: 'Bento Goncalves' },
                { name: 'uf', text: 'RS' },
                { name: 'cep', text: '95.700-000' },
                { name: 'cidade', text: 'Cidade Alta' },
              ],
            },
            {
              name: 'volumes',
              children: [
                {
                  name: 'volume',
                  children: [
                    {
                      name: 'servico',
                      text: 'SEDEX - CONTRATO',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'itens',
          children: [
            {
              name: 'item',
              children: [
                { name: 'codigo', text: 1 },
                { name: 'descricao', text: 'Won deal' },
                { name: 'un', text: 'Un' },
                { name: 'qtde', text: 1 },
                { name: 'vlr_unit', text: data.value || 0 },
              ],
            },
          ],
        },
        {
          name: 'parcelas',
          children: [
            {
              name: 'parcela',
              children: [
                {
                  name: 'vlr',
                  text: data.value || 0,
                },
              ],
            },
          ],
        },
      ],
    }
    order = jsontoxml(order);
    return order;

  }
};
module.exports = new CreateOrderDto();