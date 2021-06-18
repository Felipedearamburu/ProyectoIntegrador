module.exports = (sequelize,DataTypes)=>{


let alias = 'Producto';
let cols = {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreProducto: {
        type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    precio: {
        type: DataTypes.INTEGER,
    },
    user_added: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }


}
let config = {
    tableName: 'Producto',
    timestamps: false,
    underscored: true
}

const Producto = sequelize.define(alias, cols, config);

return Producto;
}


