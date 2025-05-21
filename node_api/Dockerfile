FROM node:14 AS node-builder
WORKDIR /usr/src/app
RUN node_api && npm install


FROM node:14 
WORKDIR /usr/src/app
COPY --from=node-builder /usr/src/app/ ./
RUN ls 
EXPOSE 5001
CMD ["/bin/sh", "-c", "cd /usr/src/app && npm start"]