# ---------------------------------------------------------------------------- #
#                                    BUILDER                                   #
# ---------------------------------------------------------------------------- #
FROM base AS backend-builder

# Set the env variable from the bake.hcl argument
ARG GITHUB_PACKAGES_TOKEN
ENV GITHUB_PACKAGES_TOKEN=$GITHUB_PACKAGES_TOKEN

WORKDIR /usr/src/app
# Step 1 - Bundle the application source files with the container then install each apps' dependencies from the pnpm store that was populated with fetch
COPY --from=apps-backend . ./apps/backend
COPY --from=shared-db-entities . ./shared/db-entities
RUN pnpm install -r --prefer-offline

# FIX for bcrypt not installing correctly
# TODO: Find a better way to ensure bcrypt working
RUN pnpm store prune

# Step 2 - Build the app and its dependencies
RUN pnpm -r --filter @collectiv/backend... build
# Step 3 - Deploy the production app in its own folder
RUN pnpm --filter=@collectiv/backend deploy --prod ./backend

# ---------------------------------------------------------------------------- #
#                                      APP                                     #
# ---------------------------------------------------------------------------- #
FROM gcr.io/distroless/nodejs18-debian11 as backend

WORKDIR /usr/src/app

# Step 1 - Copy the deployed application
COPY --from=backend-builder /usr/src/app/backend /usr/src/app/

# Step 2 - Expose the port and start the application
EXPOSE 20001
CMD [ "dist/main.js" ]
