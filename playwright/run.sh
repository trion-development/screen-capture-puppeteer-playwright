#!/usr/bin/env bash

set -xeuo pipefail

npm ci
npx playwright test