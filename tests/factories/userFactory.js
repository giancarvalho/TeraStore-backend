import faker from 'faker';

export default function createFakeUser() {
  const user = {
    name: faker.name.findName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    cpf: '00000000000',
  };

  return user;
}
