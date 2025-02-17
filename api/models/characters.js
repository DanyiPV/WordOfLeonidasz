const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Characters extends Model {}

    Characters.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            character_name: {
                type: DataTypes.STRING(40),
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize,
            modelName: 'Characters',
            tableName: 'characters',
            timestamps: false,
        }
    );

    return Characters;
};
