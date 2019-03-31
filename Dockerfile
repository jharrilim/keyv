FROM       node:11-slim as build
WORKDIR    /app
RUN        chown node:node /app
USER       node
COPY       package.json .

RUN        npm i
COPY       . .
RUN        npm run build

FROM       node:11-slim as runtime
USER       node
WORKDIR    /app
COPY       --from=build /app/dist .
ENTRYPOINT [ "node", "index.js" ]
