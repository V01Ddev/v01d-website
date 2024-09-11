FROM python:latest
WORKDIR /app

COPY api.py ./
COPY requirements.txt ./
RUN pip install -r ./requirements.txt

EXPOSE 5000
CMD ["gunicorn", "-b", ":5000", "api:app"]
