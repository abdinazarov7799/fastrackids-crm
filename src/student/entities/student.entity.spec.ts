import { StudentEntity } from './student.entity';

describe('StudentEntity', () => {
  it('should be defined', () => {
    expect(new StudentEntity()).toBeDefined();
  });
});
