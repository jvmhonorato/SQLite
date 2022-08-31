const sqlite = require('sqlite3').verbose()

//START DATABANK
const init = databaseFile => new Promise((resolve,reject)=>{
  const db =  new sqlite.Database( databaseFile, (err)=> {
        if(err){
            reject(err)
        }else{
           resolve(db) 
        }
  })
})

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
