## Overview

This repository contains the frontend codebase for the ATEG project. Built with modern web technologies, it provides a responsive and intuitive user interface for interacting with ATEG services.
Deployed at: http://34.27.252.251:5000/


## Features

- Modern UI components
- Efficient data handling
- Integration with backend
- Easy upload of video and audio files with progress tracking
- Real-time progress bar during file processing
- Automatic download of results upon completion

## Installation

To set up the development environment:

```bash
# Clone the repository
git clone https://github.com/VANSHJAIN-exe/frontend-ateg.git

# Navigate to the project directory
cd frontend-ateg

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

After starting the development server, the application will be available at `http://localhost:3000` (or another port if configured differently). Note that you have to run the flask (backend) service also. https://github.com/ShikharSomething/Ateg

Upload your video or audio files through the intuitive interface. A progress bar will display the upload and processing status. Once processing is complete, the result will automatically download to your device.

Checkout the flask code in the backend repository
