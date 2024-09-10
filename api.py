import time
import os
from flask import Flask, render_template


app = Flask(__name__, template_folder='./frontend/dist')


@app.route('/api/time')
def get_time():
    return {'time': time.time()}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
