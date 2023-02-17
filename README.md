# Local machine

## Preconditions
0. Clone project repo: https://github.com/myfan7asy/test-assignment.git

## Application
1. Install [Docker] - https://docs.docker.com/installation/
2. cd into the project directory: cd crispy-succotash
3. Run it: docker-compose up
4. Verify if the app is accessible via - http://localhost:8000/

## Tests execution
1. Proceed to the project repo > folder with tests: cd test-assignment/e2e-tests
2. Install required dependencies: npm install
3. To execute tests (sitting in test-assignment/e2e-tests/cypress/e2e/tests)
        3.1 in headless mode: npx cypress run
        3.2 via Cypress interface: npx cypress open

# Github actions
Proceed to Actions, select 'Run end-to-end tests' workflow, run the workflow under 'main' branch
