# Rate-My-Professor-Using-RAG

---

# ProfessAI

**ProfessAI** is an AI-powered assistant designed to help students find the best professors based on their specific needs and preferences. Leveraging a Retrieval-Augmented Generation (RAG) system, ProfessAI analyzes a comprehensive database of professor reviews to provide concise, relevant, and personalized recommendations, streamlining the decision-making process for students.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

**Personalized Professor Recommendations:** Receive top 3 professor recommendations tailored to your specific queries.
**Comprehensive Review Analysis:** Examine detailed reviews, including teaching style, course difficulty, and grading fairness.
**Real-time Chat Interface:** Engage with the AI assistant via an intuitive chat interface.
Structured and Concise Information:** Obtain well-organized summaries to aid in making informed decisions.
**Privacy and Security:** Ensure data is handled securely, with no personal information shared beyond what's in official reviews.
**User-Submitted Reviews:** Add and manage your own professor reviews through a user-friendly interface.
**Advanced Search Capabilities:** Search for professors by various criteria, including name, department, and subject.
**Review Filtering and Sorting:** Filter and sort reviews based on stars, subject, or department to find the best matches quickly.

## Technology Stack

- **Frontend**: React with Material-UI
- **Backend**: Next.js
- **AI Models**: Google Generative AI (Gemini) for text embeddings, OpenRouter for GPT-like interactions
- **Database**: Pinecone for vector storage and retrieval
- **APIs**: Google Generative AI, OpenAI

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/patelpratyush/Rate-My-Prof.git
   cd Rate-My-Professor-Using-RAG
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:

   ```env
   PINECONE_API_KEY=your-pinecone-api-key
   GEMINI_API_KEY=your-gemini-api-key
   OPENROUTER_API_KEY=your-openrouter-api-key
   OPENAI_API_KEY=your-openai-api-key
   ```

4. **Run the application**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000` in your web browser.

## Usage

- **Interact with ProfessAI**: Open the web app in your browser and start typing your queries in the chat interface. The AI assistant will provide recommendations based on your inputs.

- **Customizing Recommendations**: You can modify the system prompt or adjust the ranking criteria in the backend to better suit your needs.

## Project Structure

```plaintext
Rate-My-Professor-Using-RAG/
├── README.md                  # Project documentation
├── app
│   ├── Data-Set               # Data set page
│   │   └── page.js            # Page component for Data-Set
│   ├── RMP                    # Rate My Professor page
│   │   └── page.js            # Page component for RMP
│   ├── api                    # API routes
│   │   ├── chat
│   │   │   └── route.js      # Route handler for chat API
│   │   ├── pinecone
│   │   │   └── route.js      # Route handler for Pinecone API
│   │   └── scrape
│   │       └── route.js      # Route handler for scrape API
│   ├── globals.css            # Global CSS styles
│   ├── landing                # Landing page
│   │   └── page.js            # Page component for Landing page
│   ├── layout.js             # Layout component
│   └── page.js               # Main page component
├── load.ipynb                 # Jupyter notebook for loading data
├── middleware.ts             # Middleware configuration
├── public
│   ├── OIP.jpeg               # Image file
│   ├── pic.jpg                # Background image
│   └── reviews.json           # Reviews data
├── requirements.txt           # Python dependencies (if any)
└── reviews.json               # Reviews data (duplicate)
```

## Contributing

We welcome contributions from the community! To contribute:

1. **Fork the repository**
2. **Create a new branch**

   ```bash
   git checkout -b feature-your-feature-name
   ```

3. **Make your changes and commit them**

   ```bash
   git commit -m "Add your message here"
   ```

4. **Push to the branch**

   ```bash
   git push origin feature-your-feature-name
   ```

5. **Open a Pull Request**: We will review your changes and merge them into the main branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
