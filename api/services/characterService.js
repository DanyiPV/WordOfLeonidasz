const characterRepository = require("../repositories/characterRepository");

class characterService
{
    async createCharacter(newCharacter)
    {
        return await characterRepository.createCharacter(newCharacter);
    }

    async getCharacters(id)
    {
        return await characterRepository.getCharacters(id);
    }
}

module.exports = new characterService();