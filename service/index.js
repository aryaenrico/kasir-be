
const repository = require("../repository/index.js");
module.exports={
    async listAllFood(){
        return  repository.getAllListFood();
    }
}
