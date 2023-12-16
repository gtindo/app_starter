FROM ubuntu:22.04

WORKDIR /setup

# Install pip3 and virtualenv

RUN apt-get update &&  \
    apt-get install -y wget && \
    apt-get install -y python3-pip && \
    apt-get install -y python3-venv

# Install Node.js from binary files
RUN wget https://nodejs.org/dist/v20.10.0/node-v20.10.0-linux-x64.tar.xz && \
    tar -xf node-v20.10.0-linux-x64.tar.xz && \
    cd node-v20.10.0-linux-x64 && \
    cp -r ./* /usr/local/


WORKDIR /

COPY requirements.txt ./

# Install python dependencies
RUN python3 -m venv venv && \
    . venv/bin/activate && \
    pip install --no-cache-dir -r requirements.txt

# Activate virtual env
ENV PATH="/venv/bin:$PATH"

WORKDIR /app/web-components

COPY web-components/package*.json ./

# Install node dependencies
WORKDIR /app/web-components
RUN npm install

WORKDIR /app

CMD [""]
