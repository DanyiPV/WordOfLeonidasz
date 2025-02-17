module.exports = (sequelize, DataTypes) => {
    const Users = require("../models/users")(sequelize, DataTypes);
    const Characters = require("../models/characters")(sequelize, DataTypes);
    
    Users.hasMany(Characters, {
        foreignKey: "user_id",
    });

    return {
        Users,
        Characters,
    };
};