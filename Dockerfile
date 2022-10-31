FROM nginx:1.16

COPY ./out /usr/share/nginx/html

# COPY 

COPY ./license /etc/nginx/license

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx","-g","daemon off;"]
