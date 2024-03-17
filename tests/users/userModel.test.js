const { sequelize, User } = require('../../models');

describe('User Model', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should create a new user', async () => {
    const newUser = await User.create({
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    });

    expect(newUser.name).toBe('John Doe');
    expect(newUser.email).toBe('john@example.com');
    expect(newUser.age).toBe(30);
  });

  it('should not create a user without a name', async () => {
    let error;
    try {
      await User.create({
        email: 'test@example.com',
        age: 25
      });
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.name).toBe('SequelizeValidationError');
  });

  it('should not create a user without an email', async () => {
    let error;
    try {
      await User.create({
        name: 'Test User',
        age: 25
      });
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.name).toBe('SequelizeValidationError');
  });
});
