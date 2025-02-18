const db = require("../database/dbContext");

const { Op, where } = require('sequelize');

const { Sequelize, DataTypes } = require('sequelize');

class logregRepository
{
    constructor(db)
    {
        this.Users = db.Users;
    }

    async registerUser(user) {
        const newUser = await this.Users.build(user);
        
        await newUser.save();
        
        return newUser;
    }

    async checkUser(email, user_name)
    {
        try{
            const check_user = await this.Users.findOne({
                where: {
                    [Op.or]: [
                        { email: email },
                        { user_name: user_name }
                    ]
                }
            })

            return check_user;
        }
        catch(error){
            throw error;
        }
    }

    async getUser(email)
    {
        return await this.Users.findOne({
            where: { email: email }
        });
    }
}

module.exports = new logregRepository(db);