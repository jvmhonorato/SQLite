const categories = require('./categories')('./banco.sqlite3')
const products = require('./products')('./banco.sqlite3')

const test = async()=> {
    
   /* await categories.create([2,'cat2'])
    await categories.create([3,'cat3'])
    await categories.create([4,'cat4'])
    await categories.create([5,'cat5'])*/
    //  await categories.remove(1)
    //await categories.update(8, ['Categoria atualizada'])
   //   const cats = await categories.findAllPaginated({pageSize: 2, currentPage:2})
    //  console.log(await categories.findAll())
    //  console.log('cp: 0', await categories.findAllPaginated({pageSize:2, currentPage: 0}))
    //  console.log('cp: 1', await categories.findAllPaginated({pageSize:2, currentPage: 1}))
    //  console.log('cp: 2', await categories.findAllPaginated({pageSize:2, currentPage: 2}))
  
   // console.log(cats)

   //await products.create([6,'product test6', 230])
   //await products.addImage(8,[8,'<url8>','<decription8>'] )
   //await products.update(1,['product test update', 120])
   //await products.remove(1)

   console.log(await products.findAll())
   console.log('cp: 0', await products.findAllPaginated({pageSize:2, currentPage: 1}))
}

test()