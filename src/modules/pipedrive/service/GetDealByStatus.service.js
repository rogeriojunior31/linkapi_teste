const axios = require("axios");

class GetDealByStatus{
  async execute(){
    try {
      const result = await axios.get("https://api.pipedrive.com/v1/deals?api_token=a77d76cbf9bb9e5792d8d288b1c5c868ff9f3400&status=won");
      return result.data;
      
    } catch (error) {
      console.log(error)
      
    }
  }
}
module.exports = new GetDealByStatus();