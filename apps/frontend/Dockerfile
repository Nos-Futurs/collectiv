# Fetching the latest node image on alpine linux
FROM base AS frontend-builder

# Set the env variable from the bake.hcl argument
ARG GITHUB_PACKAGES_TOKEN
ENV GITHUB_PACKAGES_TOKEN=$GITHUB_PACKAGES_TOKEN

# Setting up the work directory
WORKDIR /usr/src/app

# Installing dependencies
COPY --from=apps-frontend . ./apps/frontend
COPY --from=shared-db-entities . ./shared/db-entities
RUN pnpm install -r --prefer-offline

# Step 2 - Build the app and its dependencies
RUN pnpm -r --filter @collectiv/frontend... build
# Step 3 - Deploy the production app in its own folder
RUN pnpm --filter=@collectiv/frontend deploy --prod ./frontend

# ---------------------------------------------------------------------------- #
#                                      APP                                     #
# ---------------------------------------------------------------------------- #
FROM node:18 as frontend

WORKDIR /usr/src/app

# Step 1 - Copy the deployed application
COPY --from=frontend-builder /usr/src/app/frontend /usr/src/app/

# Step 2 - Expose the port and start the application
EXPOSE 3000
CMD ["npm", "run", "serve"]
