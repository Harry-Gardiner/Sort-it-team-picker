
# **Sort-it**
Team generating app completed as part of the DevelopMe Coding Fellowship technical challenge. Built using React/Redux, the app allows users to add players, edit team size, generate and customise teams, and display bookies favourite.

View the app [here](https://harry-gardiner.github.io/Sort-it-team-picker/).

Contents:
- [**Sort-it**](#sort-it)
  - [## **Setup**](#-setup)
    - [**Requirements**](#requirements)
    - [**Installation**](#installation)
  - [## **Brief**](#-brief)
  - [## **Planning**](#-planning)
  - [## **Features**](#-features)
  - [## **Version Management**](#-version-management)
  - [## **Improvements**](#-improvements)
    - [Testing](#testing)
    - [Styling](#styling)
    - [Balance logic](#balance-logic)
## **Setup**
---
### **Requirements**
Check you have npm installed by running npm -v.

### **Installation**
Clone git repository and run npm install in the project folder:

`git clone git@github.com:Harry-Gardiner/Sort-it-team-picker.git`

`npm install`

Once the packages have installed, run the app in development mode:

`npm start`

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.

## **Brief**
---
The exercise is to create a tool which randomly picks 5-a-side football teams from a list of 10 names (10 players = 2 teams of 5).

It's up to you how you implement this, with JavaScript, PHP, as a web page, or as an app.

Optional advanced features might include:

support for n-a-side, where a list of any length can be split into two teams.
- support for balancing of the teams, where some measure of each 
- player's strength is used to allocate teams fairly.

## **Planning**
---
I started by created an [ideas](ideas.md) document setting out the required MVP and stretch goals I wanted to achieve. I then pencilled my initial  wireframe ideas, once happy with those I created an online [wireframe](ideas.md#wireframe) detailing my initial  design layout.

## **Features**
---
**MVP:**

App takes 10 names and randomly assigns them to two separate teams of 5 each.

**Additional features:**
- Set team size - functionality to set different team size (minimum 3).
- Balanced teams - functionality to generate teams based on player skill
  - Skill selected using a range bar 1-5, default 2.
- Delete player - remove from playerlist, enabling user to remove player if an error is made on input.
- Add validation:
  - Select Team size button < disabled upon reaching 3
  - Player input - required, min character length 2, disabled upon reaching required number of players and add player button removed
  - Create team buttons - disabled until required number of players has been input
  - Team Name input - required field.
- Team customisation - functionality to enter team names, select team kit colour, choose which teams home/away.
- Home/away - home team received +20% to total skill value.
- Bookies favourite - option to show bookies favourite, displaying which team is tipped to win
    - favourite is determined using teams total skill value.
- Reset - functionality to reset the app at any stage.
- Add redux persist - state saved locally so progress is not lost if the page reloads.
- Instructions - dropdown information, detailing minimum information to navigate and work the application.

**Future features:**
- Copy to clipboard - enable user to copy team lists for further distribution.
- Match result - feature enabling user to input match result.
- Back end - develop a dedicated back end, at minimum:
  - POST match data - team names, match result, team colours
  - GET match data - return all matches that have been played, with the latest match first 
- Match history - feature showing all previous matches called from the back end

## **Version Management**
---
I used git and GitHub throughout the project. I used the Feature Branch Workflow, by working on feature branches that were merged back into master using pull requests.


## **Improvements**
---
### Testing
I carried out command line tests on team generation logic. With more time I would have carried out more thorough testing, creating .test.js files, possibly implementing a framework such as Jest. 

### Styling
Create a more comprehensive CSS root file covering more shared styling attributed. Adopted a CSS class naming structure such as BEM. Written styling in SASS to keep things more organised and readable. 

### Balance logic
Balanced teams are not truly balanced, the logic needs to be more robust to ensure teams are equally split. The limitation with the current logic is that team 1 will always be at a slight advantage as they will always receive the highest skilled player and team 2 will always receive the lowest skilled player. 