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

let Course = sequelize.define(
    "Course",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nameShort: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: DataTypes.TEXT,
    },
    { tableName: "course", timestamps: false }
)

module.exports = { Student, Course }
