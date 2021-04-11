FROM node:14.15.3-buster

# INSTALL LIBRARIES
RUN RUN apt-get update && \
  apt-get install --no-install-recommends -y \
  && rm -rf /var/lib/apt/lists/*

# INSTALL NPM 
RUN npm install -g npm@latest
RUN npm --version

# ENVIRONMENT VARIABLES
ENV npm_config_loglevel warn

# Node libraries
RUN node -p process.versions

# INSTALL PACKAGES
WORKDIR /usr/volvowdioQaTest/
COPY package*.json ./
COPY . .
EXPOSE 8080
RUN npm install

# Display versions of local tools
RUN echo  " node version:    $(node -v) \n" \
  "npm version:     $(npm -v) \n" \  
  "debian version:  $(cat /etc/debian_version) \n" \
  "user:            $(whoami) \n"
RUN ls

# ON RUNNING THE IMAGE THIS COMMAND WILL BE TRIGGERED BY DEFAULT
ENTRYPOINT ["npm", "run", "test"]