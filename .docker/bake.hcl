variable "TAG" {
  default = "latest"
}

group "default" {
  targets = ["frontend"]
}


target "monorepo-dependencies" {
    context = "."
    dockerfile = ".docker/Dockerfile"
    tags = ["collectiv/monorepo-dependencies:${TAG}"]
    target = "dependencies"
    args = {
      GITHUB_PACKAGES_TOKEN: "${GITHUB_PACKAGES_TOKEN}"
    }
}

target "backend" {
    context = "apps/backend"
    contexts = {
        base = "target:monorepo-dependencies"
        apps-backend = "apps/backend"
        shared-db-entities = "shared/db-entities"
    }
    dockerfile = "Dockerfile"
    tags =  ["collectiv/backend:${TAG}"]
    args = {
      GITHUB_PACKAGES_TOKEN: "${GITHUB_PACKAGES_TOKEN}"
    }
}

target "frontend" {
    context = "apps/frontend"
    contexts = {
        base = "target:monorepo-dependencies"
        apps-frontend = "apps/frontend"
        shared-db-entities = "shared/db-entities"
    }
    dockerfile = "Dockerfile"
    tags =  ["collectiv/frontend:${TAG}"]
    args = {
      GITHUB_PACKAGES_TOKEN: "${GITHUB_PACKAGES_TOKEN}"
    }
}
