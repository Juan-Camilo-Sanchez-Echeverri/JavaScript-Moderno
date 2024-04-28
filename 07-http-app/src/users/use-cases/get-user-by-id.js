import { localhostUserMapper } from '../mappers/localhost-user.mapper.js';
import { User } from '../models/user.js';
/**
 *
 * @param {String|Number} id
 * @returns {Promise<User>}
 */
export const getUserById = async (id) => {

	const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;

	const response = await fetch(url);
	const data = await response.json();

	const user = localhostUserMapper(data);
  console.log({user})
	return user;
};
