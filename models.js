let { DataTypes } = require("sequelize")
let sequelize = require("./db")

let Student = sequelize.define(
    "Student",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please fill this first name field",
                },
            },
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        group: DataTypes.STRING,
        level: DataTypes.SMALLINT,
        course_id: DataTypes.INTEGER,
    },
    {
        tableName: "student",
        timestamps: false,
    }
)

module.exports = { Student }
