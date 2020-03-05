const express = require('express');

// Controllers
const {
  createIssue,
  editIssue,
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
 * Edit Issue
 *
 * @name editIssue
 * @route {PUT} /edit/:slug
 * @bodyparam {String} title
 * @bodyparam {String} description
 * @bodyparam {String} state
 * is asynchronous
 */
router.put('/edit/:slug', editIssue);

/**
 * Add Issue
 *
 * @name createIssue
 * @route {POST} /add
 * is asynchronous
 */
router.post('/add', createIssue);

module.exports = router;
