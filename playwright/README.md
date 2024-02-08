# Playwright Tests

This directory contains a Playwright test suite designed to run in a Docker container.
The tests simulate user interaction with a web page and capture video and screenshots.

## Running the Tests

To run the tests locally, use Docker Compose:

```shell
docker compose up
```

This command will start a Docker container, install the necessary dependencies, and run the tests.
The test execution is defined in the `run.sh` script.  

## Output

After the tests have run, the screencast and a screenshot will be recorded as `screencast.webm` and `screenshot.png`.

## Running in a CI/CD Pipeline

To run the tests in a CI/CD pipeline, you can use the official Docker image `mcr.microsoft.com/playwright` as the base for your build step. For more information on how to use the image and integrate it into your pipeline, see https://playwright.dev/docs/ci.