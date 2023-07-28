const CategoryRepository = require('./categoryRepository');

class CategoryServices {
    constructor() {
      this.categoryRepository = new CategoryRepository(); 
    }

    async getCategories() {
      try {
        return await this.categoryRepository.getCategories();   
      } catch (err) {
        console.error(err);
      }
    }
  }
  

module.exports = CategoryServices;
