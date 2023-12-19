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
# required platform to build correct image for server
docker buildx bake -f .docker/bake.hcl -f .env

# once the image is build you can upload it to the server using : 
docker save collectiv/frontend | ssh -C ovh docker load
# Temporary solution to upload the image to the server / because you can't diff so you remove and reupload the image