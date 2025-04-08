from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def game():
    return render_template("index.html")

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))  # Render에서 지정하는 포트 사용
    app.run(host="0.0.0.0", port=port)
