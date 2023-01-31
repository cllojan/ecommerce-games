export default {
    name: 'book',
    title:'Book',
    type:'document',
    fields:[
        {
            name:'image',
            title:'Image',
            type:'array',
            of:[{type:'image'}],
            options:{
                hotspot:true,
            }
        },
        {
            name:'name',
            title:'Name',
            type:'string',
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:90,
            }
        },
        {
            name:'price',
            title:'Price',
            type:'number',
        },
        {
            name:'detail',
            title:'Details',
            type:'string',
        },
        {
            title:'categoria',
            name:'categoria',
            type:'array',
           
            of:[{type:'string'}],
            options:{
                list:[
                    {title: "Acción", value: "Acción"}, 
                    {title: "Aventura", value: "Aventura"}, 
                    {title: "Estrategia", value: "Estrategia"}, 
                    {title: "RPG (juegos de rol)", value: "RPG"}, 
                    {title: "Simulación", value: "Simulación"}, 
                    {title: "Deportes", value: "Deportes"}, 
                    {title: "Carreras", value: "Carreras"}, 
                    {title: "Puzzle", value: "Puzzle"}, 
                    {title: "Juegos de rol en línea (MMORPG)", value: "MMORPG"}, 
                    {title: "Juegos de estrategia en tiempo real (RTS)", value: "RTS"},
                    {title: "Juegos de estrategia de turnos", value: "Estrategia de turnos"}, 
                    {title: "Juegos de lucha", value: "Lucha"}, 
                    {title: "Juegos de plataformas", value: "Plataformas"}, 
                    {title: "Juegos de disparos en primera persona (FPS)", value: "FPS"}, 
                    {title: "Juegos de disparos en tercera persona", value: "Disparos en tercera persona"}, 
                    {title: "Juegos de rol de acción", value: "Rol de acción"}, 
                    {title: "Juegos de rol de estrategia", value: "Rol de estrategia"}
                ],
            }
        }
    ]
}