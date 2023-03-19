#!/bin/bash
set -o allexport
source /workspaces/shopping-list/.env
source /workspaces/shopping-list/app/.env
set +o allexport

cd /workspaces/shopping-list/api
poetry install

cd /workspaces/shopping-list/app
npm install
