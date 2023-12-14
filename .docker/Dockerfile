# ---------------------------------------------------------------------------- #
#                        BUILDER - MONOREPO DEPENDENCIES                       #
# ---------------------------------------------------------------------------- #
FROM node:18 AS dependencies

ARG GITHUB_PACKAGES_TOKEN
ENV GITHUB_PACKAGES_TOKEN=$GITHUB_PACKAGES_TOKEN

# Step 1 - Install PNPM
RUN npm install -g pnpm

RUN echo $(pwd)

WORKDIR /usr/src/app

# Step 2 - Install package dependencies
COPY .npmrc ./
COPY pnpm-lock.yaml ./

# Set the auth token for the Github Packages registry
RUN npm set //npm.pkg.github.com/:_authToken=$GITHUB_PACKAGES_TOKEN

# We use `pnpm fetch` to fetch the app dependencies with only the lockfile to avoid rebuilding when the scripts change in package.json
# See https://pnpm.io/cli/fetch

# RUN \
#   --mount=type=cache,target=/root/.local/share/pnpm \
#   --mount=type=cache,target=/root/.cache/pnpm \
#   --mount=type=cache,target=/usr/src/app/node_modules \
#   pnpm fetch
RUN pnpm fetch


