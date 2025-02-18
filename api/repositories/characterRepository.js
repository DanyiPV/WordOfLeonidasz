const db = require("../database/dbContext");

const { Op } = require('sequelize');

const { Sequelize, DataTypes } = require('sequelize');

class characterRepository
{
    constructor(db)
    {
        this.Characters = db.Characters;
    }

    async createCharacter(newCharacter) {
        const Characters = await this.Characters.build(newCharacter);
        
        await Characters.save();
        
        return Characters;
    }

    async getCharacters(id) {
        const Characters = await this.Characters.findAll({
            where:{
                user_id: id
            }
        });
        
        return Characters;
    }

    async characterCodeCheck(code){
        const Characters = await this.Characters.findOne({
            where:{
                character_code: code
            }
        });
        
        return Characters;
    }
}

module.exports = new characterRepository(db);