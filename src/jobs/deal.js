const cronJob = require("node-cron");
const getDealByStatus = require("../modules/pipedrive/service/GetDealByStatus.service");
const createOrder = require('../modules/bling/service/CreateOrder.service');


const dealJob = cronJob.schedule('10 * * * * *', async()=>{
  const deals = await getDealByStatus.execute();

  const orders = await createOrder.execute(deals)
  console.log(orders);
  
});
dealJob.start();
