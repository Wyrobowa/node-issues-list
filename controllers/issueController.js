const mongoose = require('mongoose');

// Models
const Issue = mongoose.model('Issue');

// Private
const validateState = (currentState, newState) => {
  if (
    (currentState === 'pending' && newState === 'open') ||
    (currentState === 'closed' && newState === 'open') ||
    (currentState === 'closed' && newState === 'pending')
  ) {
    throw new Error(`You can't change state ${currentState} to ${newState}!`);
  }
};

// Public
const createIssue = async (req, res) => {
  const issue = new Issue(req.body);
  await issue.save();

  res.json({
    status: 'success',
    data: issue,
  });
};

const editIssue = async (req, res) => {
  const currentIssue = await Issue.findOne({ slug: req.params.slug });
  const currentState = currentIssue.state;

  validateState(currentState, req.body.state);

  const issue = await Issue.findOneAndUpdate(
    { slug: req.params.slug },
    req.body,
    { new: true },
  );

  res.json({
    status: 'success',
    data: issue,
  })
};

const getIssues = async (req, res) => {
  const issues = await Issue.find();

  res.json({
    status: 'success',
    data: issues,
  })
};

module.exports = {
  createIssue,
  editIssue,
  getIssues,
};
