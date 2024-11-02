import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Cartões',
            version: '1.0.0',
            description: 'Documentação da API para gerenciamento de cartões',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Servidor de desenvolvimento',
            },
        ],
    },
    apis: ['./src/routes/*.js'], // Caminho para os arquivos de rotas a serem documentados
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
