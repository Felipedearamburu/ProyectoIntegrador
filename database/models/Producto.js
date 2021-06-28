module.exports = (sequelize,DataTypes)=>{


let alias = 'Producto';
let cols = {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
   
   
    imagen: {
        type: DataTypes.STRING
    },
    nombreProducto: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
   
    userAdded: {
        type: DataTypes.INTEGER,
    },
    
    
    
    updatedAt: {
        type: DataTypes.DATE,
    },

    precio: {
        type: DataTypes.INTEGER
    }


}
let config = {
    tableName: 'productos',
    timestamps: false,
    underscored: false,
}

const Producto = sequelize.define(alias, cols, config);
Producto.associate = function(models){
    Producto.belongsTo(models.Usuario, {
        as : 'users',
        foreignKey : 'user_id'
    }),
    Producto.hasMany(models.Comentario, {
        as : 'comments',
        foreignKey : 'comments_id'
    })
}
return Producto;
}


