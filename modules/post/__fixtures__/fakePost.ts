import * as faker from 'faker';
export default () =>  ({
  id: faker.random.uuid(),
  title: faker.lorem.words(3),
  content: faker.lorem.paragraphs(3)
});
