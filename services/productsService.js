const { faker } = require('@faker-js/faker')

class ProductsService {
  constructor() {
    this.products = [];
    this.generateData();
  }
  //generamos datos de prueba
  generateData(){
  const size = 100;
  for (let i=0; i<size; i++) {
    this.products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
  }
  };

  //devolvemos un producto por id
  async findOne(id){
    return this.products.find(item => item.id === id);
  };

  //devolvemos todos los productos
  async findAll(){
    return this.products;
  };

  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  };

  async update(id, changes){
    const index = await this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  };

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  };
}

module.exports = ProductsService;
