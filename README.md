Evaluate News Article with Natural Language Processing

## About

In this project I build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api called Aylien, I build a simple web interface to interact with their NLP system. This tool gives us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Node and express are the webserver and routing, and webpack will be our build tool of choice. Using webpack, I have set up the app to have dev and prod environments, each with their own set of tools and commands.

The page built for this project is a simple one. It has a form with a single filed which receives an input. This input is checked for valid url. A helpful error message is displayed for invalid url. If the url is valid, then an api call is performed and the result displayed on the page.

## To run the project

1. We need to install everything:
   npm install
2. run in development mode:
   npm run build-dev
3. run in production mode:
   npm run build-prod
4. Start the server
   npm run start

##  Testing 

To run the test use the command:
   - npm run test