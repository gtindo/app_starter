FROM python:3.10

WORKDIR /

COPY requirements.txt ./

# Install gettext, a require dependency for translation
RUN apt-get update -y && apt-get install gettext -y

# Install python dependencies
RUN python3 -m venv venv && \
    . venv/bin/activate && \
    pip install --no-cache-dir -r requirements.txt

# Activate virtual env
ENV PATH="/venv/bin:$PATH"

CMD [""]
