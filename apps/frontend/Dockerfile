# Fetching the latest node image on alpine linux
FROM base AS frontend

# Set the env variable from the bake.hcl argument
ARG GITHUB_PACKAGES_TOKEN
ENV GITHUB_PACKAGES_TOKEN=$GITHUB_PACKAGES_TOKEN


# Setting up the work directory
WORKDIR /usr/src/app

# Installing dependencies
COPY --from=apps-frontend . ./apps/frontend
COPY --from=shared-db-entities . ./shared/db-entities
RUN pnpm install -r --prefer-offline

# Starting our application
CMD ["npm","start"]

# NOT WORKING BECAUSE WE NEED TO BUILD THE APP FIRST
# AND THEN DEPLOY IT