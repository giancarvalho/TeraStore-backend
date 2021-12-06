import faker from 'faker';
import * as formRepository from '../../src/repositories/formRepository.js';

async function generateFakeAddress() {
  faker.locale = 'pt_BR';
  const states = await formRepository.getStates();

  const addressData = {
    street: faker.address.streetName(),
    number: faker.datatype.number(1000),
    complement: faker.lorem.words(),
    zipcode: String(faker.datatype.number({ min: 10000000, max: 99999999 })),
    neighborhood: faker.lorem.words(),
    city: faker.address.cityName(),
    stateId: faker.random.arrayElement(states).id,
  };

  return addressData;
}

export default generateFakeAddress;
