const UserModel = require('../model/user/Model');

class User {
	constructor () {
		console.log('UserService created.');
	}

	async get (user_id) {
    const user = await UserModel.findOne({ user_id }).exec();
    console.log('UserService.get - ' , user);
		if (user) {
			return user;
		}
	}

	async isExist (user_id) {
		const user = await this.get(user_id);
		return !!user;
	}

	async create ({ from , chat , date }) {
		try {
			const normalizedData = {
				user_id: from.is_bot ? null : from.id,
				bot_id: from.is_bot ? from.id : null,
				chat_id: chat.id,
				is_bot: from.is_bot,
				first_name: from.first_name,
				last_name: from.last_name,
				username: from.username,
				language_code: from.language_code,
				last_activity: date,
			};

      const user = await new UserModel(normalizedData);
      await user.save();

			console.log( 'UserService.create - ' , user );
      return user.toObject();
		} catch (error) {
      console.error( 'UserService.create - ' , error );
      throw error;
		}
	}
}

const UserService = new User();

module.exports = UserService;