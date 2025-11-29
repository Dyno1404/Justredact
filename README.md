# Justredact
This project implements a full-stack Hospital Document Redaction System engineered to automate the detection and removal of Protected Health Information (PHI) from medical documents. The backend, developed using Python (Flask), integrates a hybrid computational pipeline comprising EasyOCR for multi-format text extraction, SpaCy’s transformer-based NER model (en_core_web_trf) for contextual entity recognition, and Regex-driven pattern analysis for identifying structured patient identifiers, including dates of birth, addresses, phone numbers, and medical reference numbers (MRN). Detected PHI elements are redacted at the pixel level on the original document to ensure irreversible masking consistent with healthcare privacy and compliance standards. The frontend, built with React (Vite), provides a secure, web-based interface enabling hospital personnel to upload documents, preview detected PHI, and download fully sanitized outputs. Designed for reliability and scalability, this system supports high-volume clinical workflows by offering seamless processing of PDFs, Word documents, text files, and medical images commonly found in hospital environments.

# Run the Backend (Python API)

1. Go to the backend folder cd RedactionTool

2. Activate your virtual environment
source venv/bin/activate

3. Install dependencies
pip install -r requirements.txt

4. Run the API server
python3 api.py Your backend will now be running at http://127.0.0.1:50002.

# Run the Frontend (React App)

1. Open a NEW terminal and go to the frontend folder cd frontend-app

2. Install dependencies
npm install

3. Run the development server
npm run dev Your frontend will now be running at http://localhost:5173You can now open http://localhost:5173 in your browser to use the app.
