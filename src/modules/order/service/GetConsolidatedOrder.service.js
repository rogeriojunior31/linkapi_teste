const Order = require('../../../models/Order');

class GetConsolidatedOrder {
  async execute() {
    try {
      const orders = await Order.aggregate([
        {
          $project: {
            date: '$date',
            value: '$value',
          },
        },
        {
          $sort: {
            value: -1,
            numero: 1,
          },
        },
      ]);

      return orders;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new GetConsolidatedOrder();
