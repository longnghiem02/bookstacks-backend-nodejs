import appService from '../services/appService';

const handleGetAllGenre = async (req, res) => {
  const message = await appService.getAllGenreService()
  return res.status(200).json(message)
}

const handleGetAllKind = async (req, res) => {
  const message = await appService.getAllKindService()
  return res.status(200).json(message)
}

const handleGetAllCode = async (req, res) => {
  const message = await appService.getAllCodeService(req.query.type)
  return res.status(200).json(message)
}

module.exports = {
  handleGetAllGenre,
  handleGetAllKind,
  handleGetAllCode
}