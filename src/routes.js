const { Router } = require('express');
const getConsolidatedOrder = require('./modules/order/service/GetConsolidatedOrder.service');

const routes = Router();

routes.get('/consolidate', async (req, res) => {
  const orders = await getConsolidatedOrder.execute();

  return res.status(200).json(orders);
});

module.exports = routes;
