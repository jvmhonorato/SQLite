const sqlite = require('sqlite3').verbose()

//START DATABANK

const openDatabase = databaseFile => new Promise((resolve,reject)=>{
    const db =  new sqlite.Database( databaseFile, (err)=> {
          if(err){
              reject(err)
          }else{
             resolve(db) 
          }
    })
  })


const init = async( databaseFile) => {
    const db = openDatabase(databaseFile)
    //check if databank was created
    const exists = await query(db, `SELECT name from sqlite_master where type = 'table' and name='categories'`)
    if(exists.length === 0){
        await run(db,`
        CREATE TABLE    categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category TEXT
          );
        ` )
        await run(db,`
        CREATE TABLE    products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product TEXT,
            price REAL
          );
       ` )
        await run(db,`
        CREATE TABLE    images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT,
            url TEXT,
            product_id INTEGER REFERENCES products(id)
            );
        ` )

    }

    return db
}

//QUERY WITH PARAMS
const queryWithParams = (db, query, values) => new Promise((resolve,reject) => {
    db.run(query, values, err => {
        if(err){
            reject(err)
        }else{
          resolve()  
        }
    })
})
//QUERY 
const query = (db, query) => new Promise((resolve,reject) => {
    db.all(query, (err, row) => {
        if(err){
            reject(err)
        }else{
          resolve(row)  
        }
    })
})

module.exports = {
    init,
    queryWithParams,
    query
}
