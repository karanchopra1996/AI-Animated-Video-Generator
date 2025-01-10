# AI Anime Video Generator
A simple Next.js application that generates short AI-animated videos based on text prompts using Replicate’s deforum_stable_diffusion model.

## Features
- AI-Powered Video Generation: Generates short, anime-style animated clips from user prompts.
- Next.js Backend: Built with Next.js API routes for easy server-side functionality.
- Simple Prompt Input: Provide text prompts to generate unique and creative video outputs.

## Getting Started
### Clone the Repository
 - git clone https://github.com/your-username/ai-anime-video-generator.git
 - cd ai-anime-video-generator

### Install Dependencies
 - npm install

### Set Up Environment Variables
 - Create a .env file in the project root.
 - Add your Replicate API [https://replicate.com/] token like so
     - REPLICATE_API_TOKEN = <your-replicate-api-token>

### Start the Application
 - npm run dev
 - The app will run at http://localhost:3000.

### Usage
 - Enter a short text prompt (e.g., “a cyberpunk city with neon lights”).
 - Click Generate Video to trigger the AI model.
 - Wait for the process to complete, then watch the resulting animated video.


Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
