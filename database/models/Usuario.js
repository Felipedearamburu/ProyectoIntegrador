module.exports = (sequelize,DataTypes)=>{


    let alias = 'Usuario';
    let cols = {
    
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        
        password: {
            type: DataTypes.STRING
        },
        telefono: {
            type: DataTypes.DATE
        },
        role: {
            type: DataTypes.INTEGER
        },
        FechaDeNacimiento: {
            type: DataTypes.DATE
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    
    }
    let config = {
        tableName: 'Usuarios',
        timestamps: false,
        underscored: false
    }
    
    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto, {
            as : 'productos',
            foreignKey: 'usuario_id' 
        }),
        Usuario.hasMany(models.Comentario,{
            as: 'usuarios',
            foreignKey: 'usuario_id'
        })
    }
    return Usuario;
    }
    
    
    