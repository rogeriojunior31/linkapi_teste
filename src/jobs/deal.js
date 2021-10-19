const cronJob = require('node-cron');
const getDealByStatus = require('../modules/pipedrive/service/GetDealByStatus.service');
const createOrderBling = require('../modules/bling/service/CreateOrder.service');
const createOrder = require('../modules/order/service/CreateOrder.service');

const dealJob = cronJob.schedule('0 55 23 * * *', async () => {
  console.log('job started');
  const deals = await getDealByStatus.execute();

  const ordersIntegrated = await createOrderBling.execute(deals);
  console.log(ordersIntegrated);

  if (!ordersIntegrated.length) {
    return console.log('Without orders to save');
  }

  const orders = await createOrder.execute(ordersIntegrated);
  console.log(orders);

});
dealJob.start();
