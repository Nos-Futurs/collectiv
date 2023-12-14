# Fetching the latest node image on alpine linux
FROM base AS frontend

# Setting up the work directory
WORKDIR /usr/src/solid-app

# Installing dependencies
COPY --from=apps-frontend . ./apps/frontend
COPY --from=shared-db-entities . ./shared/db-entities
RUN pnpm install -r --prefer-offline

# Starting our application
CMD ["npm","start"]