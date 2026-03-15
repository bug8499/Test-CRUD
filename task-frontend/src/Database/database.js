import { Sequelize,DataTypes, Deferrable } from "sequelize";

// use sequenlize
const sequelize = new Sequelize('test_db', 'root', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Set true if you want to see SQL query logs
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    }
  },
);

const Task = sequelize.define(
  'Task',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    statusId:{
      type: DataTypes.ENUM("pending", "in_progress", "completed"),
    },
    userId: {
      type: DataTypes.STRING,
      references: {
        model: User,
        key: 'id',
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
  },
);