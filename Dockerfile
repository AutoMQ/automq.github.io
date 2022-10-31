FROM nginx:alpine

RUN apk add --no-cache --update nodejs=16.17.1-r0 yarn=1.22.19-r0

COPY package.json pnpm-lock.yaml* ./

RUN yarn global add pnpm && pnpm i --frozen-lockfile

COPY . .

RUN pnpm build

RUN pnpm export

# COPY

COPY ./license /etc/nginx/license

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx","-g","daemon off;"]
