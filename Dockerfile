FROM node:6.3.0

WORKDIR /src
ADD . .
RUN npm install --production

EXPOSE 5000

CMD []
ENTRYPOINT ["npm", "start"]
