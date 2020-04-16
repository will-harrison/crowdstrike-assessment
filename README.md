# CrowdStrike Front End Assessment for Will Harrison

### This is a fairly fully built React application. I used the React Context API to manage application state, and React hooks to manage component state.

## Notes and assumptions

- I need to wrap up the project, so I have a very happy path implemented. I've spent about 8 hours over the course of 3 days.
- I ran into some issues with the Formik library, and validation at the form level is not implemented
- I went down the path of using the schema data for form validation, and would have continued down that path, but tried Formik out for form validation. I wasn't able to quicly match up the schema with the validation techniques, mostly due to lack of documentation using the Formik/React hooks.
- Regarding slicing the PartyTypes when displaying the party types name, I recognize this is fragile, in that if a party type does not end in 'Party', this would not display correctly. In this situation, I would work with the back end developer to encourage shaping the data for display purposes and to include an id.
- I would have done plenty more abstraction, a lot of replication of code in the different modal files
- No tests implemented
- git commit very quick and dirty

## To build

- Clone the project
- Run `npm i` in the terminal
- Run `npm start` in the terminal
- Navigate to http://localhost:3000
