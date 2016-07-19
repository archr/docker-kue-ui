FROM node:6.3.0

WORKDIR /app

COPY package.json /app/package.json
RUN cd /app; npm install;
COPY . /app

EXPOSE 5000

CMD []
ENTRYPOINT ["npm", "start"]
