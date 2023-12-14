#!/bin/bash

# COLORS
BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# We get the script path no matter where we call it from. It uses a bash specific variable and uses the `pwd` command to resolve any symlink in the path
script_path=$(
  cd "$(dirname "${BASH_SOURCE[0]}")"
  pwd -P
)

cd "$script_path"
echo -e "${BLUE}Building docker images...${NC}"
docker buildx bake -f .docker/bake.hcl -f .env

