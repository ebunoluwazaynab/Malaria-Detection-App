from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

# Load the trained model
model = load_model("mobilenetv2_malaria_model.h5")

class_names = ["Parasitized", "Uninfected"]

def read_imagefile(file) -> Image.Image:
    img = Image.open(io.BytesIO(file)).convert('L')  # Convert to grayscale
    return img

def predict_image(img: Image.Image):
    img = img.resize((224, 224))  # Resize image to 224x224 pixels
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize image

    predictions = model.predict(img_array)
    predicted_class_index = int(np.round(predictions[0])[0])
    predicted_class = class_names[predicted_class_index]

    message = f"The sample is {predicted_class.lower()}."

    return {"message": message}

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files.get("file")
    if not file:
        return jsonify({"error": "No file provided"}), 400

    img = read_imagefile(file.read())
    prediction = predict_image(img)
    return jsonify(prediction)

# Health check endpoint
@app.route("/", methods=["GET"])
def index():
    return "Welcome to the malaria detection API!"

if __name__ == "__main__":
    app.run(debug=True)
