const axios = require('axios');
const createOrderDto = require('../dto/CreateOrderDto.dto');

class CreateOrder {
  async execute(deals) {
    try {
      const orders = await Promise.all(deals.data.map(async (deal) => {
        const order = createOrderDto.transform(deal);

        const result = await axios.post(`https://bling.com.br/Api/v2/pedido/json/?apikey=${process.env.BLING_KEY}&xml=${order}`);

        const { pedidos: ordersCreated } = result.data.retorno;

        if (ordersCreated) {
          return { value: deal.value };
        }

        return { error: true };

      }));

      const ordersFiltered = orders.filter((order) => !order.error);

      return ordersFiltered;

    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new CreateOrder();
