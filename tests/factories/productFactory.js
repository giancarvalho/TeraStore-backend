import faker from 'faker';

export default function generateFakeProduct(catId) {
  const fakeProduct = {
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    categoryId: catId,
    image: faker.internet.avatar(),
    stock: faker.datatype.number(50),
  };

  return fakeProduct;
}
