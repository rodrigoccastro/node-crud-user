const UserRepository = require('../repositories/userRepository');
const UserDto = require('../dtos/userDto');
const UserModel = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');


class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users.map(user => this.modelToDto(user));
  }

  async getUserById(id) {
    const user = await this.userRepository.findById(id);
    return user ? this.modelToDto(user) : null;
  }

  async createUser(userDto) {
    userDto.id = uuidv4();
    const newUser = await this.userRepository.create(userDto);
    return this.modelToDto(newUser);
  }

  async updateUser(userDto) {
    const updatedUser = await this.userRepository.update(userDto.id, userDto);
    return this.modelToDto(updatedUser);
  }

  async deleteUser(id) {
    return await this.userRepository.delete(id);
  }

  modelToDto(userModel) {
    return new UserDto(userModel.id, userModel.name, userModel.email, userModel.age);
  }
}

module.exports = UserService;