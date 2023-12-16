FROM python:3.10

WORKDIR /

COPY requirements.txt ./

# Install python dependencies
RUN python3 -m venv venv && \
    . venv/bin/activate && \
    pip install --no-cache-dir -r requirements.txt

# Activate virtual env
ENV PATH="/venv/bin:$PATH"

CMD [""]
