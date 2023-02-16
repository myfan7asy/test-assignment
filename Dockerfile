FROM python:3.6
RUN apt-get update && apt-get install -y \
    libpq-dev \
    postgresql-client
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD . /code/
RUN pip install -r requirements.txt
EXPOSE 8000
