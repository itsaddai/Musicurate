# VidSync - Social Media Video Scheduler

VidSync is a web application that allows content creators to schedule and upload their videos to multiple social media platforms seamlessly. With VidSync, users can efficiently manage their content distribution across platforms like Instagram Reels, Snapchat Spotlight, TikTok, and YouTube Shorts, all from a single, user-friendly interface.

## Features

- **User Authentication**: Secure user login and registration system to access VidSync's features and manage social media accounts.

- **Social Media Account Linking**: Connect and authorize your Instagram, Snapchat, Facebook, YouTube, and TikTok accounts to VidSync for easy video sharing.

- **Scheduled Post**: Schedule your videos to be automatically uploaded at specific times on each connected social media platform.

- **Multi-Platform Upload**: Upload videos to multiple platforms simultaneously with just one click.

- **Points System**: Earn points by engaging with other creators and sharing their content. Spend points to upload videos to YouTube using YouTube API.

- **Real-Time Analytics**: Monitor video performance and engagement with real-time analytics for each platform.

## Tech Stack

VidSync is built using the MERN stack (MongoDB, Express.js, React, and Node.js) for robust and scalable development. It also utilizes various third-party APIs to interact with social media platforms.

- **Frontend**: React, Redux, Axios

- **Backend**: Node.js, Express.js, MongoDB

- **Authentication**: JSON Web Tokens (JWT)

- **Social Media APIs**: Instagram API, Snapchat API, Facebook API, TikTok API

## Getting Started

Follow these steps to get a local copy of VidSync up and running:

1. **Clone the Repository**:
   ```
   git clone https://github.com/itsaddai/vidsync.git
   cd vidsync
   ```

2. **Install Dependencies**:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the `server` folder and set up environment variables, such as API keys and database connection strings.

4. **Start the Development Server**:
   - Run the frontend and backend servers:
   ```
   cd client
   npm start
   ```
   ```
   cd server
   npm start
   ```

5. **Access VidSync**:
   - Open your browser and navigate to `https://vidsync.net` to access the VidSync application.

## Contributions and Bug Reports

Contributions and bug reports are welcome! If you want to contribute to VidSync or report any issues, please feel free to open a pull request or create an issue on the GitHub repository.

## License

VidSync is licensed under the MIT License. You can find the full license in the `LICENSE` file.

---

Thanks for checking out VidSync! We hope this application helps simplify your social media content management and scheduling process. If you have any questions or feedback, don't hesitate to reach out to our team. Happy syncing! 🎥🚀
