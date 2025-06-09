const db = require('../config/db');
const User = require('../models/userModel');

jest.mock('../config/db');

describe('User Model', () => {
  test('deve obter todos os usuários', async () => {
    db.query.mockResolvedValue({ rows: [{ id: 1, name: 'John Doe'}] });

    const users = await User.getAll();

    expect(users).toEqual([{ id: 1, name: 'John Doe'}]);
  });

  test('deve obter um usuário pelo ID', async () => {
    db.query.mockResolvedValue({ rows: [{ id: 1, name: 'John Doe'}] });

    const user = await User.getById(1);

    expect(user).toEqual({ id: 1, name: 'John Doe' });
  });

  test('deve criar um novo usuário', async () => {
    db.query.mockResolvedValue({
      rows: [{ id: 1, name: 'John Doe' }],
    });

    const newUser = await User.create({ name: 'John Doe' });

    expect(newUser).toEqual({ id: 1, name: 'John Doe' });
  });

  test('deve atualizar um usuário', async () => {
    db.query.mockResolvedValue({
      rows: [{ id: 1, name: 'John Doe' }],
    });

    const updatedUser = await User.update(1, { name: 'John Doe'});

    expect(updatedUser).toEqual({ id: 1, name: 'John Doe'});
  });

  test('deve deletar um usuário', async () => {
    db.query.mockResolvedValue({ rowCount: 1 });

    const isDeleted = await User.delete(1);

    expect(isDeleted).toBe(true);
  });

  test('deve retornar false se o usuário não for encontrado para deleção', async () => {
    db.query.mockResolvedValue({ rowCount: 0 });

    const isDeleted = await User.delete(2);

    expect(isDeleted).toBe(false);
  });
});
