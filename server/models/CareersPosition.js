import { DataTypes } from 'sequelize'
import sequelize from '../config/connection.js'

const CareersPosition = sequelize.define('CareersPosition,',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    positionType: {
      type: DataTypes.STRING,
      defaultValue: 'full-time'
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: 'on-site'
    },
    locationAddress: {
      type: DataTypes.STRING,
      defaultValue: 'dallas, tx'
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'careers_position',
  }
)

export default CareersPosition