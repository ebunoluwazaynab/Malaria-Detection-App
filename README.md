# Malaria Detector Web App

## Project Description
The Malaria Detector Web App is a machine learning application designed to detect malaria from microscopic images of blood smears. This application leverages a fine-tuned MobileNetV2 model for accurate classification. The project consists of a Flask backend for serving the model and a React frontend for user interaction.

## Project Motivation
Malaria is a life-threatening disease caused by parasites that are transmitted to people through the bites of infected female Anopheles mosquitoes. Early diagnosis and treatment are crucial to prevent the disease from becoming fatal. This project aims to leverage deep learning techniques to assist healthcare professionals in diagnosing malaria quickly and accurately.

## Features
- Upload blood smear images and get immediate predictions.
- User-friendly interface for easy interaction.
- High accuracy in detecting malaria using a fine-tuned MobileNetV2 model.

## Technologies Used
- **Backend**: Flask, TensorFlow, Keras
- **Frontend**: React, Vite
- **Deployment**: Docker (optional)

## Prerequisites
- Python 3.8+
- Node.js 14+
- Git

## Data Description
The dataset used for training the model is the [Malaria Cell Images Dataset](https://www.kaggle.com/iarunava/cell-images-for-detecting-malaria) from Kaggle. It contains labeled images of infected and uninfected blood smears.

## Installation

### Clone the Repository
```bash
git clone https://github.com/<your-github-username>/<repository-name>.git
cd <repository-name>
```

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment:**
   ```bash
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```

4. **Install the required packages:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Run the Flask app:**
   ```bash
   python app.py
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install the required packages:**
   ```bash
   npm install
   ```

3. **Run the frontend development server:**
   ```bash
   npm run dev
   ```

## Usage
1. **Ensure the backend server is running:**
   ```bash
   cd backend
   source venv/bin/activate
   python app.py
   ```

2. **Ensure the frontend server is running:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Open your browser and navigate to the frontend server (usually `http://localhost:5173`).**

4. **Upload an image and click "Predict" to get the prediction.**

## File Structure

```
.
├── backend
│   ├── app.py
│   ├── requirements.txt
│   ├── mobilenetv2_malaria_model.h5
│   └── venv
│       ├── ...
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── assets
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── FileUpload.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
```

## Model Training
The model used in this project is a fine-tuned MobileNetV2, trained on the Malaria Cell Images Dataset. The training was performed using TensorFlow and Keras.

### Steps to Train the Model
1. **Load the dataset**: The dataset is loaded and split into training, validation, and test sets.
2. **Preprocess the data**: Images are resized to 224x224 pixels and normalized.
3. **Build the model**: MobileNetV2 is used as the base model, with additional layers added for classification.
4. **Train the model**: The model is trained on the training set and validated on the validation set.
5. **Save the model**: The trained model is saved for later use in the Flask app.

## Deployment
### Docker (Optional)
To containerize the application using Docker, follow these steps:

1. **Build the Docker image:**
   ```bash
   docker build -t malaria-detector .
   ```

2. **Run the Docker container:**
   ```bash
   docker run -p 5000:5000 malaria-detector
   ```

## Example Input and Output
### Example Input
- An image of a blood smear.

### Example Output
![image](https://github.com/ebunoluwazaynab/Malaria-Detector-App/assets/64692340/ea49404e-5a8c-4646-b20a-27205993b727)


## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Acknowledgements
- This project uses the [Malaria Cell Images Dataset](https://www.kaggle.com/iarunava/cell-images-for-detecting-malaria) from Kaggle.
- The model is built using the MobileNetV2 architecture and TensorFlow framework.

## Contact
For any questions or suggestions, please contact zayawofeso@gmail.com.
