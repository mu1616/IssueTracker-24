const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config');

const getAllUser = async (req, res, next) => {
  const users = await User.findAll({
    attributes: ['id', 'sns_id'],
  });
  return res.status(200).json(users);
};

const getCurrentUser = async (req, res, next) => {
  const authorizationHeaderValue = req.headers.authorization;
  if (!authorizationHeaderValue || !authorizationHeaderValue.startsWith('Bearer ')) {
    const error = new Error('no auth token');
    error.status = 401;
    next(error);
  }

  const token = authorizationHeaderValue.slice(7, authorizationHeaderValue.length).trimLeft();
  jwt.verify(token, config.jwt.secretKey, (err, decoded) => {
    if (err) next(err);
    res.status(200).json({ sns_id: decoded.sns_id });
  });
};
module.exports = { getAllUser, getCurrentUser };
