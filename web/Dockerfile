# Python Redis Driver
FROM python:2.7

ADD . /code

WORKDIR /code
RUN pip install -r requirements.txt
CMD python app.py

CMD gunicorn app:app -b 0.0.0.0:5000
