const { Issue, User, Label, Milestone } = require('../models');

const getAllIssues = async (req, res, next) => {
  const issues = await Issue.findAll({
    attributes: ['id', 'title', 'content', 'state', 'created_at', 'closed_at'],
    include: [
      {
        model: User,
        attributes: ['id', 'user_id', 'sns_id'],
      },
      {
        model: Label,
        as: 'labels',
        attributes: ['id', 'title', 'description', 'color'],
        through: { attributes: [] },
      },
      {
        model: User,
        as: 'assignees',
        attributes: ['id', 'user_id', 'sns_id'],
        through: { attributes: [] },
      },
      {
        model: Milestone,
        attributes: ['id', 'title', 'description', 'due_date', 'state'],
      },
    ],
  });
  res.status(200).json(issues);
};
const createIssue = async (req, res, next) => {
  const { title, content, user_id } = { ...req.body };
  const issue = await Issue.create({
    title,
    content,
    user_id,
  });
  res.status(200).json(issue);
};
module.exports = { getAllIssues, createIssue };
