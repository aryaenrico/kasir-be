const service = require("../service/index");
module.exports = {
  async getAllFood(req, res) {
    try {
        let listOfFood = await service.listAllFood();
        console.info(listOfFood);
        console.info("hai");
        res.status(200).json({
          status:"sukses",
          data:listOfFood
        }); 
    } catch (e) {
      res.status(400).json({
        status: "gagal",
        message: e.message,
      });
    }
  },
};
