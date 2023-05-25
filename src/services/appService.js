import db from '../models';

const getAllGenreService = async () => {
	try {
		const response = await db.Genre.findAll({
			attributes: {
				exclude: ['createdAt', 'updatedAt'],
			},
		});
		if (!response) {
			return {
				errCode: 1,
				errMessage: 'Cannot get genre',
			};
		} else {
			return {
				errCode: 0,
				errMessage: 'Ok',
				data: response,
			};
		}
	} catch (e) {
		console.log(e);
		return {
			errCode: -1,
			errMessage: 'Error from server',
		};
	}
};

const getAllKindService = async () => {
	try {
		const response = await db.Kind.findAll({
			attributes: {
				exclude: ['createdAt', 'updatedAt'],
			},
		});
		if (!response) {
			return {
				errCode: 1,
				errMessage: 'Cannot get genre',
			};
		} else {
			return {
				errCode: 0,
				errMessage: 'Ok',
				data: response,
			};
		}
	} catch (e) {
		console.log(e);
		return {
			errCode: -1,
			errMessage: 'Error from server',
		};
	}
};

const getAllCodeService = async (type) => {
  try {
    if (!type) {
      return {
				errCode: 1,
				errMessage: 'Missing required parameters!',
			} 
    } else {
			const allcode = await db.Allcode.findAll({
				where: { type: type },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
			});
			return {
				errCode: 0,
				data: allcode
			}
		}
  } catch (e) {
    console.log(e);
		return {
			errCode: -1,
			errMessage: 'Error from server',
		};
  }
}

module.exports = {
	getAllGenreService,
	getAllKindService,
  getAllCodeService
};
