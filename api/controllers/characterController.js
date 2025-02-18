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
    const { id, character_name, character_type } = req.body;

    const characterCode = await generateCharacterCode();

    const newCharacter =
    {
        id: null,
        character_name: character_name,
        character_level: 1,
        strength: 5,
        character_code: characterCode,
        character_type: character_type,
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

const generateCharacterCode = async () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const code_check = await characterService.characterCodeCheck(code);

    if (code_check) {
        return await generateCharacterCode();
    }

    return code;
};