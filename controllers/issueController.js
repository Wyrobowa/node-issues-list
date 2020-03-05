const mongoose = require('mongoose');

// Models
const Issue = mongoose.model('Issue');

const createIssue = async (req, res) => {
  const issue = new Issue(req.body);
  await issue.save();

  res.json({
    status: 'success',
    data: issue,
  });
};

const editIssue = async (req, res) => {
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
