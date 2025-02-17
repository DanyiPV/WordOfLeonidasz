const logregRepository  = require("../repositories/logregRepository");

class logregService
{
    async checkUser(email, user_name)
    {
        return await logregRepository.checkUser(email, user_name);
    }
    
    async registerUser(user)
    {
        return await logregRepository.registerUser(user);
    }

    async getUser(email)
    {
        return await logregRepository.getUser(email);
    }
}

module.exports = new logregService();