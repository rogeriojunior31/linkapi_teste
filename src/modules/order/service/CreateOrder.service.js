const Order = require('../../../models/Order');
const today = require('../../../utils/today');

class CreateOrder {
  async execute(orders) {
    try {
      let total = 0;

      orders.forEach((order) => { total += order.value; });

      const orderFormated = {
        value: total,
        date: today()
      };

      const result = await Order.create(orderFormated);

      return result;

    } catch (error) {
      console.log(error);

    }
  }
}

module.exports = new CreateOrder();
