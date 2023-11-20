FROM fedora:latest

WORKDIR /portfolio_site

COPY . .

RUN yum install npm -y
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]