# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY . .

WORKDIR src/common

RUN node getFileTree.js

RUN node algoliaSearch.js

RUN npm run build

RUN npm run export


FROM nginx:alpine

# COPY
COPY ../license /etc/nginx/license

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=deps /out ./out



CMD ["nginx","-g","daemon off;"]