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
            character_level:{
                type: DataTypes.INTEGER(11),
                allowNull: false,
                defaultValue: 1,
            },
            strength:{
                type: DataTypes.INTEGER(11),
                allowNull: false,
                defaultValue: 5,
            },
            character_code: {
                type: DataTypes.STRING(5),
                allowNull: false,
                unique: true,
            },
            character_type:{
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 0,
                    max: 3
                }
            }
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
