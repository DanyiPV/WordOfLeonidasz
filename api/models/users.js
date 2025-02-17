const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {}

    Users.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            email: {
                type: DataTypes.STRING(150),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.CHAR(60),
                allowNull: false,
            },
            user_name: {
                type: DataTypes.STRING(40),
                allowNull: false,
                unique: true,
            }
        },
        {
            sequelize,
            modelName: 'Users',
            tableName: 'users',
            timestamps: false,
        }
    );

    return Users;
};
