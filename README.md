# Personality Quiz Website

A React-based personality quiz website that determines a user’s element based on their answers to a series of quiz questions. The site then fetches and displays a piece of artwork related to the user’s element from the Met Museum API.

## Features

- **User Form**: Collects the user’s name before starting the quiz.
- **Interactive Quiz**: Presents a series of questions to identify the user's element.
- **Results Display**: Shows the user’s determined element and a piece of related artwork.
- **Loading State**: Displays a message while fetching the artwork.

## Technologies

- React
- React Router
- Tailwind CSS
- Met Museum API

## Installation

To set up and run the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/freddyfavour/personality-quiz-website.git
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd personality-quiz-website
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```
4. **Start the Development Server**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage

1. **Enter Your Name**: On the home page, input your name and click "Start Quiz".
2. **Complete the Quiz**: Answer the questions to determine your element.
3. **View Results**: After completing the quiz, view your element and a related artwork.

## Code Structure

- **`App.jsx`**: Main component managing routes and state.
- **`fetchArtwork.js`**: Function to fetch artwork from the Met Museum API.
- **`components/`**:
  - **`Header.jsx`**: Displays the header of the application.
  - **`Question.jsx`**: Renders quiz questions and options.
  - **`Results.jsx`**: Shows the quiz results and fetched artwork.
  - **`UserForm.jsx`**: Form for users to enter their name.
  - **`UserContext.jsx`**: Context provider for managing user’s name.

- **`constants/data.js`**: Contains quiz questions, element mappings, and keywords.

## API

The application uses the Met Museum API to fetch artwork. More information can be found [here](https://metmuseum.github.io/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to fork the repository and submit a pull request for any improvements or fixes.

## Contact

For questions or feedback, please open an issue on the GitHub repository or reach out to me [via email](mailto:alfredfavour76@gmail.com).
