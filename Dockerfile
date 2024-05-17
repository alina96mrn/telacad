FROM node:12.18.3

ADD . /src

WORKDIR /src

RUN npm install
RUN npm install -g webpack react-scripts

# Expose the app port
EXPOSE 3000

CMD ["npm", "start"]
