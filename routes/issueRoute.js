const express = require('express');

// Controllers
const {
  createIssue,
  getIssues,
} = require('../controllers/issueController');

const router = express.Router();

/**
 * Get Issues list
 *
 * @name getIssues
 * @route {GET} /list
 * is asynchronous
 */
router.get('/list', getIssues);

/**
 * Add Issue
 *
 * @name createIssue
 * @route {POST} /add
 * is asynchronous
 */
router.post('/add', createIssue);

module.exports = router;
