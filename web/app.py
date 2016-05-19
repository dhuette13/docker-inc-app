from flask import Flask
from redis import Redis

app = Flask(__name__)
redis = Redis(host='redis', port=6379)


@app.route('/api')
def getCount():
    redis.incr('count')
    return redis.get('count')

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
