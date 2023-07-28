const RegisterRepository = require("./registerRepository");

class RegisterService{
    constructor(){
        this.registerRepo=new RegisterRepository();
    }
    async register(username){
        return await this.registerRepo.register(username);
    }
}
module.exports =RegisterService;

