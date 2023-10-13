const {Food}  = require("../models");
module.exports={
    async getAllListFood(){
        return Food.findAll();
    }
}