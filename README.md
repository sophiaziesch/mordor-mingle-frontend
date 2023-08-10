# Mordor Mingle - Event Website

Mordor Mingle is a web application that provides a platform for users to explore events happening in Middle Earth. Whether you're interested in the latest gatherings, celebrations, or meetings, Mordor Mingle has you covered. By logging in, users can take advantage of additional features such as event publication, event commenting, event details viewing, and managing their own event activity on their profile page. The application is built using a modern tech stack including Node.js, React, Express, JavaScript, CSS, and MongoDB.

![Mordor Mingle Screenshot](/src/assets/Logo-white.png)

## Features

- **Event Exploration:** Explore a wide range of events happening in Middle Earth.
- **User Authentication:** Create an account or log in to unlock additional features. Authentication is powered by JWT (JSON Web Tokens) and bcrypt for password hashing.
- **Event Publication:** Logged-in users can publish their own events to share with the community.
- **Event Comments:** Engage with other users by leaving comments on events.
- **Event Details:** View detailed information about each event.
- **User Profile:** Keep track of events you've created and liked through your profile.
- **Modern Tech Stack:** Developed using Node.js, React, Express, JavaScript, CSS, and MongoDB.

## Installation

1. Clone this repository: `git clone https://github.com/yourusername/mordor-mingle.git`
2. Navigate to the project directory: `cd mordor-mingle`
3. Install server dependencies: `npm install`
4. Navigate to the `client` directory: `cd client`
5. Install client dependencies: `npm install`
6. Return to the project directory: `cd ..`

## Configuration

1. Rename `.env.example` to `.env`.
2. Open `.env` and provide your configuration values (e.g., MongoDB URI, JWT secret).

## Usage

1. In the project directory, start the server: `npm start`
2. In a separate terminal, navigate to the `client` directory: `cd client`
3. Start the client: `npm start`
4. Access the application in your web browser at: `http://localhost:3000`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.
