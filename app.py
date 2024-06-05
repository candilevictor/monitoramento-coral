from flask import Flask, request, jsonify
import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.callbacks import EarlyStopping
import sys
sys.stdout.reconfigure(encoding='utf-8')

app = Flask(__name__)

def predict_image(img_path):
    try:
        # Carregar e processar a imagem
        img = image.load_img(img_path, target_size=(150, 150))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array /= 255.0

        # Fazer a predição
        prediction = model.predict(img_array)

        # Mostrar o resultado da predição
        print("Raw prediction:", prediction)  # Para depuração
        if prediction < 0.5:
            return "A imagem corresponde a um recife de coral saudável."
        else:
            return "A imagem corresponde a um recife de coral branqueado."
    except Exception as e:
        print("Error during prediction:", e)  # Para depuração
        return "Error during prediction: " + str(e)  # Se ocorrer um erro, retornar uma mensagem de erro


@app.route('/predict', methods=['POST'])
def predict():
    try:
        if 'file' not in request.files:
            print("No file found in request")  # Para depuração
            return jsonify({'error': 'No file found'})

        file = request.files['file']
        if file.filename == '':
            print("No selected file")  # Para depuração
            return jsonify({'error': 'No selected file'})

        file_path = 'app/static/uploaded_image.jpg'  # Save the uploaded image temporarily
        print("Saving uploaded image to:", file_path)  # Para depuração
        file.save(file_path)

        prediction = predict_image(file_path)
        print("Prediction result:", prediction)  # Para depuração

        return jsonify({'prediction': prediction})
    except Exception as e:
        print("Error during prediction:", e)  # Para depuração
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    # Carregar o modelo CNN
    model = Sequential([
        Conv2D(32, (3, 3), activation='relu', input_shape=(150, 150, 3)),
        MaxPooling2D((2, 2)),
        Conv2D(64, (3, 3), activation='relu'),
        MaxPooling2D((2, 2)),
        Conv2D(128, (3, 3), activation='relu'),
        MaxPooling2D((2, 2)),
        Flatten(),
        Dense(512, activation='relu'),
        Dropout(0.5),
        Dense(1, activation='sigmoid')
    ])

    # Compilar o modelo
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

    # Configuração do Gerador de Imagens
    train_datagen = ImageDataGenerator(
        rescale=1./255,
        rotation_range=20,
        width_shift_range=0.2,
        height_shift_range=0.2,
        shear_range=0.2,
        zoom_range=0.2,
        horizontal_flip=True,
        validation_split=0.2  # Usar 20% dos dados para validação
    )

    # Diretórios das classes
    train_dir = 'D:/gs-monitoramento-coral/train'
    val_dir = 'D:/gs-monitoramento-coral/val'

    train_generator = train_datagen.flow_from_directory(
        train_dir,
        target_size=(150, 150),
        batch_size=32,
        class_mode='binary'
    )

    val_generator = train_datagen.flow_from_directory(
        val_dir,
        target_size=(150, 150),
        batch_size=32,
        class_mode='binary'
    )

    # Configurando o callback EarlyStopping
    early_stopping = EarlyStopping(
        monitor='val_loss',  # Métrica a ser monitorada
        patience=5,          # Número de épocas sem melhoria após as quais o treinamento será interrompido
        restore_best_weights=True  # Restaurar os pesos do melhor modelo ao final do treinamento
    )

    # Treinar o modelo
    history = model.fit(
        train_generator,
        steps_per_epoch=train_generator.samples // train_generator.batch_size,
        validation_data=val_generator,
        validation_steps=val_generator.samples // val_generator.batch_size,
        epochs=25,
        callbacks=[early_stopping]
    )

    app.run(debug=True, host='0.0.0.0', port=5000)
