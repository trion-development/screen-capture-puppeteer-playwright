# Puppeteer Tests

This directory contains a Puppeteer test suite that is designed to run in a Docker container.
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

To run the tests in a CI/CD pipeline, you can use the Docker image `trion/ng-cli-e2e` as a base for your build step. This image includes all the necessary dependencies for Puppeteer to run.

Here's an example of how you might define a build step in a CI/CD pipeline configuration file:

```yaml
steps:
  - name: puppeteer
    image: trion/ng-cli-e2e:17.1.1
    environment:
      - PUPPETEER_EXECUTABLE_PATH: /usr/bin/google-chrome
    script:
      - npm ci
      - npx jest
```