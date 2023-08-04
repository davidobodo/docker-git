#!/bin/bash

check_url() {
  curl --silent --fail "$1" >/dev/null
  return $?
}

wait_for_url() {
  local url="$1"
  for _ in {1..30}; do # try for 30 seconds
    if check_url "$url"; then
      return 0
    fi
    sleep 1
  done
  echo "Service at $url did not respond in time"
  return 1
}

wait_for_url "http://localhost:5050" && wait_for_url "http://localhost:3000"
