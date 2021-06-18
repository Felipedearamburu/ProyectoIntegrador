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
        usuarios_id : {
            type: DataTypes.INTEGER
        },
        producto_id: {
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
        tableName: 'Comentario',
        timestamps: false,
        underscored: true
    }
    
    const Comentario = sequelize.define(alias, cols, config);
    
    return Comentario;
    }
    
    
    