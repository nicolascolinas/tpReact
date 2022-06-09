let productos = [
    {
        id:'1',
        nombre:'Cafe Nigeria',
        descripcion:'Granos de cacao',
        stock:'5',
    },
    {
        id:'2',
        nombre:'Cafe Colombia',
        descripcion:'Granos de cacao',
        stock:'5',
    },
    {
        id:'3',
        nombre:'Cacao Portuges',
        descripcion:'Granos de cacao',
        stock:'5',
    },
    {
        id:'4',
        nombre:'Cacao Camerún ',
        descripcion:'Granos de cacao',
        stock:'5',
    },
];


export const getFetch = () => {
        //acciones
        return new Promise( (resolver, reject)=>{
            setTimeout(()=>{
                resolver(productos)
            }, 3000)
            //reject('no tengo nada para')

        })
}
