# Use a imagem base do Python
FROM python:3.9-slim

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos do seu aplicativo para o contêiner
COPY . .

# Instale as dependências do Python
RUN pip install -r requirements.txt

# Defina a variável de ambiente para o Flask
ENV FLASK_APP=app.py

# Exponha a porta em que o Flask será executado
EXPOSE 5000

# Comando para iniciar o aplicativo Flask
CMD ["flask", "run", "--host=0.0.0.0"]
