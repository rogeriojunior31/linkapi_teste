const axios = require('axios');

class GetDealByStatus {
  async execute() {
    try {
      const result = await axios.get(`https://api.pipedrive.com/v1/deals?api_token=${process.env.PIPEDRIVE_KEY}&status=won`);
      return result.data;

    } catch (error) {
      console.log(error);

    }
  }
}
module.exports = new GetDealByStatus();
