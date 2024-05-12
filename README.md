# React-Datadog Integration

This project is a web application built using React that integrates with Datadog, a monitoring tool. It allows users to fetch data from the Datadog API, create monitors, and receive monitor event updates via a webhook.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Fetch Data**: Use Datadog API to fetch monitor and metric data and display it in a table format.
2. **Create Monitor**: Allow users to create monitors by filling out a form with message, name, query, and type fields.
3. **Webhook Integration**: Configure a webhook in Datadog to receive monitor event updates and display them in the React app.

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd react-datadog-integration
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

# React-Datadog Integration

Once the app is running, you can

- [x] 1. View monitor and metric data fetched from the Datadog API.
- [x] 2. Click the "Create New Monitor" button to open a form and submit a new monitor.
- [x] 3. Configure a webhook in Datadog to send monitor event updates to the app.
