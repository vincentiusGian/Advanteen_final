from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import BertTokenizer, TFBertForSequenceClassification
import tensorflow as tf
import numpy as np

app = Flask(__name__)
CORS(app)  # agar bisa diakses dari React frontend

# Load model dan tokenizer (pastikan file .h5 dan tokenizer config berada di folder yang sama)
model = TFBertForSequenceClassification.from_pretrained("./bert_volunteer_classifier", from_pt=False)
tokenizer = BertTokenizer.from_pretrained("./bert_volunteer_classifier")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        text = data.get("text")

        if not text:
            return jsonify({"error": "Teks kosong"}), 400

        # Tokenisasi
        inputs = tokenizer(text, return_tensors="tf", truncation=True, padding=True)

        # Prediksi
        outputs = model(**inputs)   
        probs = tf.nn.softmax(outputs.logits, axis=-1)
        predicted_label = int(tf.argmax(probs, axis=1).numpy()[0])
        probabilities = probs.numpy()[0].tolist()

        return jsonify({
            "prediction": predicted_label,
            "probabilities": probabilities
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
