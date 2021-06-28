module.exports = (sequelize,DataTypes)=>{


    let alias = 'Comentario';
    let cols = {
    
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        texto: {
            type: DataTypes.TEXT
        },
        usuariosId : {
            type: DataTypes.INTEGER
        },
        productoId: {
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
        tableName: 'comentarios',
        timestamps: false,
        underscored: false,
    }
    
    const Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario, {
            as : 'usuarios',
            foreignKey : 'usuario_id'
        }),
        Comentario.belongsTo(models.Producto, {
            as : 'productos',
            foreignKey : 'product_id'
        })
    }
    
    return Comentario;
    }
    
    
    