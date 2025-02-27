# AI Email Reply Generator

## Overview
AI Email Reply Generator is a web application that helps users generate professional email responses in various tones using AI. Users can input an email, select a tone, and get a well-structured reply instantly. 

## Features
- **Generate Email Replies:** Automatically generate responses for emails based on the selected tone.
- **Tone Selection:** Choose from multiple response tones such as Neutral, Professional, Casual, Friendly, and Sarcastic.
- **Mobile Friendly:** Responsive UI adapts to different screen sizes.
- **Copy to Clipboard:** Easily copy the generated reply with a single click.
- **Smooth Animations:** Framer Motion is used for interactive animations.

## Technologies Used
- **Frontend:** React.js, JavaScript, Framer Motion
- **Backend:** Spring Boot, Java, Spring AI, Gemini API

## Installation

### Web Application
1. Clone the repository:
   ```sh
   git clone https://github.com/pratiksonthaliya/ai-email-assistant-frontend.git   
   git clone https://github.com/pratiksonthaliya/ai-email-assistant-backend.git   
   ```

2. Start the frontend server:
   ```sh
   cd ai-email-assistant-frontend
   npm install
   npm run dev
   ```
3. Start the backend server:
   ```sh
   cd ai-email-assistant-backend
   mvn spring-boot:run
   ```

## Usage
### Web Application
1. Paste the original email into the text area.
2. Select the desired response tone.
3. Click the **Generate Reply** button.
4. Copy the generated response and use it as needed.

## API Endpoint
- **POST** `/api/email/generate`  
  - Request Body:
    ```json
    {
      "emailContent": "Your email content here",
      "tone": "neutral"
    }
    ```
  - Response:
    ```json
    {
      "reply": "Generated email response."
    }
    ```

## Future Enhancements
- Improve AI-generated responses using advanced NLP techniques.
- Add more tone options.
- Implement authentication for user-specific responses.

## License
This project is licensed under the MIT License.

## Author
Pratik Sonthaliya