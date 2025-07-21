module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Joke", {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};