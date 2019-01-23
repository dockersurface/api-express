import dotenv from 'dotenv';

// load .env
dotenv.config();

export default {
    mysqlInfo: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database:'test',
        port: 3306,
        // 最大连接数，默认为10
        connectionLimit: 10
    },
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 8000,
    secretKey: 'secret'
};