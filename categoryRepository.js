const pool = require('./database');
const queries =require('./queries');

class CategoryRepository {
    async getCategories(){
          return await pool.query(queries.getCategory);
    }

}

module.exports=CategoryRepository;