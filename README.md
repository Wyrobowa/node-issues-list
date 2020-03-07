# Node Issue Tracker

This REST API project is based on Node.js Express and uses MongoDB database.

This is a backend part of App. Frontend part is built on React (Create React App). Local frontend host by default is: [http://localhost:3000](http://localhost:3000).

It is an issue tracker. It shows a list of all issues that are added in a db. Every issue contains title, description and state (open, pending and closed). Issues with `open` state can be changed to `pending` or `closed` state. Issues with `pending` state can be only changed to `closed` state. `Closed` issues state can't be changed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Starts the project. Default host is [http://localhost:3001](http://localhost:3001). 

## What could be added?

1. Tests - e.g. [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
2. Error handling - especially HTTP statuses.
3. Better form fields validation
