const axios = require("axios");
const createOrderDto = require("../dto/CreateOrderDto.dto");

class CreateOrder {
  async execute(deals){
    try {
      const orders = await Promise.all(deals.data.map(async(deal) =>{
        console.log('deal', deal);
        const order = createOrderDto.transform(deal);
        console.log('order', order);
        const result = await axios.post(`https://bling.com.br/Api/v2/pedido/json/?apikey=80a86e2bdc0f2e59d8a9a001af1314bd3839989b85a0edca5b988651c03ea4c59e6a6102&xml=${order}`);
        return result.data;      

      } ));
      //const ordersFiltered = orders.data.return

      return orders;
    } catch (error) {
      console.log(error);
    }    
  }
};
module.exports = new CreateOrder();
