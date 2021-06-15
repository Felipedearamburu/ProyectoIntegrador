let autos = {
    productos : [
        {
            id : 0,
            nombre : "Kia Rio",
            precio : "1.600.000",
            imagen : "kiario.jpeg",
            descripcion : 'Con nuevo diseño dinámico y ágil, está equipado con la mejor tecnología y es la mejor opción para moverte en la ciudad pero también para escaparte de ella. El nuevo diseño del Rio ofrece mayor espacio interior para que, vayas donde vayas, el viaje sea confortable.'
        },
        {
            id : 1,
            nombre : "Bmw X5",
            precio : "4.000.000",
            imagen : "bmw.jpeg",
            descripcion : 'El BMW X5 es un todoterreno que mide 4,92 metros de longitud, 2 metros de anchura y 1,75 de altura. Cuenta con un maletero con 650 litros. Fue estrenado en el Salón de Detroit de 1999 y ya va por su cuarta generación, estrenada en 2018. Todas las versiones a la venta cuentan con tracción integral xDrive de serie.'
        },
        {
            id : 2,
            nombre : "Toyota Etios",
            precio : "1.100.000",
            imagen : "etios.jpeg",
            descripcion : 'El Toyota Etios 2018/2019 se encuadra dentro del segmento B ( autos chicos). Tras ponerse a la venta en el país a mediados de 2013, en abril de 2017 se presentó la actual versión con un rediseño estético frontal y trasero, que completó la renovación que el modelo tuvo en 2016 en materia de mecánica, equipamiento y tecnología.'
        },
        {
            id : 3,
            nombre : "Volkswagen Golf",
            precio : "2.000.000",
            imagen : "golf.jpeg",
            descripcion : 'El Volkswagen Golf es un automóvil del segmento C producido por el fabricante alemán de automóviles Volkswagen desde 1974. Es uno de los automóviles más vendidos en la historia, con más de 30 millones de unidades fabricadas.'
        },
        {
            id : 4,
            nombre : "Mercedes Benz Clase C",
            precio : "3.200.000",
            imagen : "mercedes.jpeg",
            descripcion : 'El Mercedes-Benz Clase C Es un automóvil de gama alta (automóvil de turismo del segmento D) producido por el fabricante alemán Mercedes-Benz desde el año 1993. Es el sucesor del Mercedes-Benz 190,.'
        },
        {
            id : 5,
            nombre : "Toyota Yaris",
            precio : "1.400.000",
            imagen : "yarys.jpeg",
            descripcion : 'Para esta edición el Toyota Yaris cambia sus dimensiones exteriores. 3,94 metros de largo, 1,74 metros de ancho y 1,5 metros de altura. Cotas muy buenas para los entornos urbanos, su principal rango de actuación. A esas dimensiones hay que añadir una distancia entre ejes de 2,56 metros de largo, que se traduce en un habitáculo pensado para un máximo de cinco ocupantes.'
        },
        {
            id : 6,
            nombre : "Volkswagen Polo",
            precio : "1.700.000",
            imagen : "golf.jpeg",
            descripcion : 'El Volkswagen Polo es un automóvil de turismo del segmento B producido por el fabricante alemán de automóviles Volkswagen desde 1975. Su nombre deriva del deporte Polo. A lo largo de su historia se ha vendido con carrocerías hatchback de tres y cinco puertas, sedán de dos y cuatro puertas y familiar de cinco puertas.'
        },
        {
            id : 7,
            nombre : "Toyota Corolla",
            precio : "1.600.000",
            imagen : "yarys.jpeg",
            descripcion : 'Nueva suspensión deportiva Toyota Gazoo Racing con cambios en la configuración de resortes y amortiguadores e incorporación de componentes aerodinámicos que hacen al Corolla GR-S un auto divertido de manejar.'
        },
        {
            id : 8,
            nombre : "Volkswagen Nivus",
            precio : "2.000.000",
            imagen : "nivus.jpeg",
            descripcion : 'El Volkswagen Nivus tiene un lenguaje de diseño similar al del Volkswagen T-Cross, pero con una caída del techo acentuada, donde la zaga es la protagonista por la prominente caída del pilar “C” que, junto a las grandes llantas de aleación de 17 pulgadas, le confiere un aire más deportivo.'
        },
        {
            id : 9,
            nombre : "Volkswagen T-Cross",
            precio : "1.900.000",
            imagen : "t-cross.jpeg",
            descripcion : 'El Volkswagen T-Cross (denominación interna: Typ C1) es un SUV del segmento B del fabricante alemán Volkswagen. Se construye sobre la plataforma de bloque de construcción transversal modular A0 (MQB) (en alemán, Modularer Querbaukasten) y llegó en abril de 2019 al mercado.'
        },
        {
            id : 10,
            nombre : "Volkswagen Passat",
            precio : "2.000.000",
            imagen : "passat.jpeg",
            descripcion : 'Sus dimensiones son de 4,77 metros de largo, 1,83 metros de ancho y 1,48 metros de alto, con una batalla de 2,78 metros. Unas medidas que le hacen ser una de las berlinas de mayor habitabilidad interior. Ideal para cuatro o cinco pasajeros.'
        },
        {
            id : 11,
            nombre : "Volkswagen Amarok",
            precio : "2.700.000",
            imagen : "amarok.jpeg",
            descripcion : 'Sus dimensiones son 5,32 metros de largo, 1,95 metros de ancho y 1,83 metros de alto, contando con una batalla de 3,09 metros. La capacidad de carga de la pick-up de Volkswagen es de hasta 1.041 kilogramos. Su peso es de 2.100 kg.'
        },
        {
            id : 12,
            nombre : "Volkswagen Tiguan",
            precio : "4.000.000",
            imagen : "tiguan.jpeg",
            descripcion : 'El Volkswagen Tiguan es un automóvil todoterreno del segmento C de cinco plazas producido por el fabricante alemán Volkswagen desde el año 2007. Tiene carrocería de cinco puertas y motor delantero transversal, disponible con tracción delantera o tracción a las cuatro ruedas conectable automáticamente 4motion.'
        },
        {
            id : 13,
            nombre : "Volkswagen Touareg",
            precio : "2.300.000",
            imagen : "touareg.jpeg", 
            descripcion : 'El nuevo Touareg cuenta con nuevos motores, ahora más eficientes y mejoras en cuanto al equipamiento. El exterior del Touareg estrena diseño en el frontal y en la zaga, en consonancia con el nuevo lenguaje de diseño de la marca. Rasgos de diseño que ya pueden verse en modelos como el Volkswagen Arteon.'
        },
        {
            id : 14,
            nombre : "Volkswagen Vento",
            precio : "1.600.000",
            imagen : "vento.jpeg",
            descripcion : 'Vento es un automóvil subcompacto producido por Volkswagen India, la filial del fabricante de automóviles alemán Volkswagen, desde 2010. ... La quinta y sexta generación de Jetta fue llamada Vento en Argentina y Uruguay, puesto que «yeta» significaba «mala suerte» o «infortunio».'
        },
        {
            id : 15,
            nombre : "Kia Sportage",
            precio : "1.500.000",
            imagen : "sportage.jpeg", 
            descripcion : 'El Kia Sportage es un SUV de carácter familiar fabricado por KIA y que compite directamente en el reñido segmento de los SUV medianos. KIA tiene en el KIA Sportage a uno de los modelos fundamentales para entender el auge de los SUV en nuestro mercado. Es un coche que se sitúa entre el KIA Stonic y el KIA Sorento.'
        },
    ]

}

module.exports = autos;
      