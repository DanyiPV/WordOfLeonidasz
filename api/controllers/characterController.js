const characterService = require("../services/characterService");
require("dotenv").config();

exports.getCharacters = async (req, res, next) =>
    {
        const { id } = req.query;
    
        const get_characters = await characterService.getCharacters(id);
    
        try{
            if(get_characters == null){
                const error = new Error("Nem sikerült a karakterek lekérdezése!");
    
                error.status = 400;
    
                throw error;
            }
    
            res.status(201).send(get_characters)
        }
        catch(error){
            next(error);
        }
    }

exports.createCharacter = async (req, res, next) =>
{
    const { id, character_name } = req.body;

    const newCharacter =
    {
        id: null,
        character_name: character_name,
        user_id: id,
    }

    const characterCreate_result = await characterService.createCharacter(newCharacter);

    try{
        if(characterCreate_result == null){
            const error = new Error("Nem sikerült a karakter létrehozás!");

            error.status = 400;

            throw error;
        }

        res.status(201).send(characterCreate_result)
    }
    catch(error){
        next(error);
    }
}