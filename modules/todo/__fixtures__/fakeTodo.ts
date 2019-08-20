import * as faker from 'faker';
export default () =>  ({
  id: faker.random.uuid(),
  title: faker.lorem.words(3),
  status: faker.random.arrayElement(['pending', 'done'])
});
