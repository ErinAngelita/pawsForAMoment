 # PawsForAMoment

## PawsForAMoment is a mobile application that aggregates animal shelters across the state of Montana.
______

#### If you're new to PawsForAMoment...
- Clone the repo
- npm install on both the front and back ends.
  - front-end is in the main pawsForAMoment folder
  - back-end is in the server folder
- in order to run the app on your local server, you will need to simultaneously run 2 terminals (one for both the front and back ends)
  - on the front-end: run
    `npm start`
  - on the back-end: cd into server and run
    `npm run devstart`
- app is served on a simulator or through expo on your device

#### PawsForAMoment Features...
- Future Pet Parents can view available animals for adoption across the state of Montana on one platform
- Users have ability to log into app and save animals they're interested in to MyPets page
- When viewing pets(on find Pets or MyPets pages) users can click on image to display pet bio
  - When bio is rendered can click slider to add pets to MyPets pages
- Can filter pet search by species with slider on bottom of landing page
- Shelter Admin have ability to add Pets to database
- All available pet images are displayed on landing page

## Please refer to Code of Conduct, Contributing file, and User story in the DOCS folder!

_______

## Daily Workflow Logs
### 04/05/18:
- Implemented Travis CI testing
- Installed Create-React-Native-App

### 04/06/18
- Created side project for testing
- Implemented create-react-native-app and react-navigation
- Able to pass props from page to another

### 04/09/18
##### Side project for user-auth build out
- built mongodb and initial user routes, built userSchema
- got username/password checking on login page with database
- fixed async issues with login pack
- started building createUser file

### 04/10/2018
##### Side project for user-auth build out
- built POST function for new users on front end
- built password check to make sure password and confirm password match
- started building check on front-end to make sure new user's username doesn't already exist
- decided to refactor and build username check on the back end
- started building middleware for check, but encountering blob errors

### 04/11/2018
- Ian fixed blob errors on user auth side project, create user works and is all handles through back end
- Build back-end routes for login page
- refactored login.js so checks are happening on back-end
- Integrated side project into main project with successful user auth
- Installed sinon, chai, enzyme, and enzyme-adapter-react for testing suite
- Refactored testing suite into individual pages for each Component
- Created and tested landing page

### 04/12/2018
- Created NavBar.js
- Added navbar to stack and implemented on all pages
- Added Login and Home buttons to navbar with working functionality that takes you to login page and landing page respectively
- Currently struggling with flex styling of navbar

### 04/13/2018
- Figured out how to target Header for our navbar purposes
- Created functioning buttons for Home and Login on the landing page, need to implement in other components
- Deleted Navbar file and imports
- Implemented header in all components
- Working on auth check for header variability

### 04/16/2018
- Refactored code without react-navigation to handle state on a higher level
- Added petSchema and pet routes to back-end
- Added pets to our database
- Created Pets page that gets data from database
- Currently displaying names, but not images

### 04/17/2018
- Integrated changes from Eric and Kelsey
  - Eric Branch - incorporated mLabs to host database, created EnterPets.js, and implemented from Login.js screen
  - Kelsey Branch - refactored all pages, added myPets button to loggedIn navbar, added logo to all pages, added navbar and pets test files, and added styling on pets page and navbar
- Abstracted switch statement out of render function in App.js
- Got pet images to render in Pets.js page
- Started working on expanding pet info with onPress function

### 04/19/2018
- Added drop-down functionality for available pet display page.
- Added extra pet information to be displayed on pet display page.
- Styled pet display page to be visually pleasing.
- Pet information now show/hides depending on which pet is selected for display.
- Rounded out the pet information for "Odysseus" with an image.
- Erin's computer is happier. it is not making sounds or heating up strangely.

### 04/20/2018
- Created 'save to my pets' slider in pets page
  - only renders when logged in
- Created routes to save pet info to user and to display pets on MyPets page
  - having issues with display pets route

### 04/22/2018
- Added trim to login pages.
- Fixed bug on MyPets page so that slider function doesn't change all pets.
- Backend route for MyPets works correctly.
- Minor styling to pets page.

### 04/23/2018
- Slider now correctly adds and removes pets from MyPets.
- Slider now correctly shows if pet has been added to MyPets.
- Inserted button into MyPets to remove pets from that location.
- Added pictures to LandingPage.
- Changed login initial login route to LandingPage.
- Minor styling
- Can only access EnterPets if you are Admin (in NavBar)

### 04/24/2018
- Changed EnterPets to make species input require Dog or Cat
- Added query slider to search pets by species
- Added styling, background, and images to all pages
- Entered more animals into database
- Added features section to README
