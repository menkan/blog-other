module.exports = {
    host:process.env.HOST || '127.0.0.1',
    port:process.env.PORT ||(process.env.NODE_ENV === 'production'?8080:3000),
    apiHost:process.env.APIHOST || '127.0.0.1',
    apiPort:process.env.APIPORT || '3030',
    dbHost:"localhost",
    dbPort:"27017",
    app:{
        title:"Xu Tongze's blog",
        description:'Xu Tongze\'s blog',
        head:{
            titleTemplate:'blog',
            meta:[
                {
                    name:"description",
                    content:"react express demo"
                },
                {
                    charset:"utf-8"
                }
            ]
        }
    },
    dbConfigs: {
        host: "127.0.0.1",
        port: "27017",
        outLogPath: '',
    },
};