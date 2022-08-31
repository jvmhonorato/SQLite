const db = require('./db')

const init = database => {

    
//CREATE CATEGORIES
const create = async(data) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn,`insert into categories (id,category) values (?,?)`,data)
}

//READ CATEGORIES
const findAll = async() => {
    const dbConn = await db.init(database)
    return await db.query(dbConn,`select * from categories`)

}
//REMOVE CATEGORIES
const remove = async(id) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn,`delete from categories where id = ?`,[id])
}
//UPDATE CATEGORIES
const update = async(id,data) => {
    const dbConn = await db.init('./banco.sqlite3')
    await db.queryWithParams(dbConn, `update categories set category=? where id=?`, [...data, id])
     
   
}
const findAllPaginated = async({pageSize = 1, currentPage = 0}) => {
     const dbConn = await db.init(database)
    //primeiro parâmetro pageSize(quantos pulam) o segundo currentPage(qunatos serão mostrados) obs: ${currentPage*pageSIze},${pageSize}
    const records = await db.query(dbConn, `select * from categories limit ${pageSize * currentPage}, ${pageSize+1}`)
    const hasNext = records.length > pageSize
    if(records.length > pageSize){
        records.pop()
    }
    return {
        data: records,
        hasNext
    }
   
}
return  {
    findAll,
    findAllPaginated,
    remove,
    create,
    update
    
} 

}



module.exports = init
  
