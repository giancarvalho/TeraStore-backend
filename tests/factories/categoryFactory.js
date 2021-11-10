import faker from 'faker';

export default function generateCategory() {
  return faker.commerce.department();
}
