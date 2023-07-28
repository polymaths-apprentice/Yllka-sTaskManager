const pool = require('./database');
const queries = require('./queries');

class RegisterRepository{
    async register(username){
        try{
         await pool.query(queries.register,[username]);
        }catch(err){
         throw new Error('An error occurred while registering.');
        }
     }
}

module.exports=RegisterRepository;