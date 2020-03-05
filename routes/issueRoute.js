const express = require('express');

// Controllers
const {
  createIssue,
  editIssue,
  getIssues,
} = require('../controllers/issueController');

// Helpers
const { catchErrors } = require('../middlewares/errorHandlers');

const router = express.Router();

/**
 * Get Issues list
 *
 * @name getIssues
 * @route {GET} /list
 * is asynchronous
 */
router.get('/list', catchErrors(getIssues));

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
router.put('/edit/:slug', catchErrors(editIssue));

/**
 * Add Issue
 *
 * @name createIssue
 * @route {POST} /add
 * is asynchronous
 */
router.post('/add', catchErrors(createIssue));

module.exports = router;
