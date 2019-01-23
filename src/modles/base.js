import  config from '../config/default.js';
import mysql from 'mysql';
const env = process.env.NODE_ENV || 'development';

class DB {

    query(sql, values) {
        console.time('start');
        return new Promise(( resolve, reject ) => {
            let pool = mysql.createPool(config['mysqlInfo']);
            pool.getConnection(function(err, connection) {
              if (err) {
                reject( err )
              } else {
                connection.query(sql, values, ( err, rows) => {
        
                  if ( err ) {
                    reject( err )
                  } else {
                    resolve( rows )
                    console.timeEnd('start')
                  }
                  connection.release()
                })
              }
            })
        })
    }


}

export default DB;