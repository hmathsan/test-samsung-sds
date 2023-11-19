FROM node as node
WORKDIR /app/
COPY ./samsung-evaluation-ui .
RUN npm i npm@latest -g
RUN npm install
COPY ./samsung-evaluation-ui /app/
RUN npm run build

# Estagio 2 - Responsável por expor nossa aplicação
FROM nginx
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#RUN rm -rf /usr/share/nginx/html/*
COPY --from=node /app/dist/samsung-evaluation-ui/browser/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
