const categories = require('./categories')

const test = async()=> {
    
   /* await categories.create([2,'cat2'])
    await categories.create([3,'cat3'])
    await categories.create([4,'cat4'])
    await categories.create([5,'cat5'])*/
    //  await categories.remove(1)
    //await categories.update(8, ['Categoria atualizada'])
     const cats = await categories.findAllPaginated()
  
   console.log(cats)
}

test()