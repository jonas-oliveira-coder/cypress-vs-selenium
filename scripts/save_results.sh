#!/bin/bash
set -e

SELENIUM_TIME=$(docker compose run --rm selenium | grep "Execution time" | awk '{print $3}')
CYPRESS_TIME=$(docker compose run --rm cypress | grep "Duration:" -A1 | grep -oP '[0-9.]+(?=ms)' | head -1)

node scripts/merge_results.js "$CYPRESS_TIME" "$SELENIUM_TIME"
