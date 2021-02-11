# Partyr
Partyr is an application using the MERN Stack that allows users to organize and find parties.  
[Live Demo](https://partyr-app.herokuapp.com/#/)

## Background and Overview  
Due to the COVID-19 quarantine, all of our team members have been feeling a bit of cabin fever. Now more than ever people have to be especially organized when attending events...  

With Partyr you can organize parties, social gatherings, and events to meet new people with just a swipe. Never have an unorganized party again! Let us do the planning and you do the partying.

* Great-Parties: Allow users to join and host parties on our platform.
* Intuitive-UI: Users can use our app without any education on our product and is similar to other preexisiting web applications.
* Real-time: Communication for parties update in real-time so everyone stays on the same page. 

Partyr is built with the MERN Stack, consisting of MongoDB, Express, React, and Node.

## Functionality & MVP
- [x] User Auth
- [x] Hosting parties (CRUD functionalities)
- [x] Finding and joining parties
- [x] Party info with live chat
- [x] User dashboard  
![Partyr Demo](https://i.imgur.com/QLGiL8s.gif)

## Bonus Features
- [x] Mobile compatibility 
- [ ] Virtual party feature

## Technologies and Technical Challenges
Partyr is built with the MERN stack (MongoDB, Express, React, and Node).

* MongoDB - document database
* Express - Node.js web framework
* React - client-side JavaScript framework
* Node - premier JavaScript web server

### Backend: MongoDB/Express/Node.js
* Partyr's backend will be built on MongoDB to save data about users and parties.

### Frontend: React/Redux
* The UI interface is built on React's platform and application states are managed by Redux.

### Websockets
* Partyr will be using Websockets to implement the live chat feature. 

### Google Maps API
* Parties will use the Google Map API to show the party location.

## Technical Challenges
There are always hiccups when learning new technologies. Our solution to all of our issues is our strong communication and collaboration between each of the members of the team. Whenever there was a bug there would always be a member of the team ready to listen and provide a new set of eyes.  

```JavaScript
render() {
    let chatMessages = null;
    if (this.props.users.length > 0) {
      chatMessages = this.state.chat.map((msg, idx) => {
        let color;
        this.props.users.forEach(user => {
          if (user.username === msg.username) {
            color = user.color
          }
        })
        return (
          this.props.user.username === msg.username ? (
            <li key={idx} className="self msg-item">
              <div>
                <p className="chat-username">{msg.username}</p>
                <p className="chat-msg" style={{borderColor: this.props.user.color}}>{msg.message}</p>
              </div>
            </li>
          ) : (
            <li key={idx} className="other msg-item" >
              <div>
                <p className="chat-username">{msg.username}</p>
                <p className="chat-msg" style={{borderColor: color}}>{msg.message}</p>
              </div>
            </li>
          )
        )
      })
    }
```


The live chat functionality gave us the most technical difficulty, but also allows us to show our collaboration skills. Each user is assigned a unique randomly generated color in the back end and this is passed to the front end where this color will display next to their name whenever they send a message. Each party also shows its own messages by filtering the messages by partyId. These functions that required code from both the frontend and the backend. This is where we struggled most, but this is the feature we are most proud of.

## Wireframes
Our team had a strong vision for what we wanted our app to look like and due to our frontend lead's strong design skills we were able to create exactly what we envisioned. We knew we wanted to make a sleek and intuitive dashboard for users to engage with. Parties will show up like cards and users can swipe or click the buttons to join or skip a party.

![Partyr wireframes](assets/partyr_wireframes.png)

[View wireframes on Figma](https://www.figma.com/file/3P2lKnlPt874KSz9259n6t/Partyr?node-id=0%3A1) 

## Group Members and Work Breakdown
* Edmond Hui - Team Lead / Flex Developer
* Jasmine Lok - Backend Lead
* Alexandria Wong - Frontend Lead
* Ray Liang - Flex Developer

### November 30 
* Build React skeleton - All
* Setup backend directory & file structure - Jasmine & Ray
* Finish user authentication (ex. demo login) - All
* Connect React App to database - Jasmine
* Host site on Heroku - Edmond

### December 1 
* Implement frontend routes - Alexandria
* Implement backend routes (ex. parties) - Jasmine 
* Get started with Websockets and Google Maps API - Edmond
* Start working on functionality - Edmond & Ray

### December 2
* Websockets for live chat feature - Edmond
* Continue working on functionality on routes and build API requests to backend - Jasmine & Ray
* Start designing webpage and CSS - Alexandria
* Implement Google Maps API - Edmond & Jasmine

### December 3
* Debugging and making sure all features work - All
* Seed database with test data to test all features - Ray
* Find and fix any bugs, data cleanup - All

### December 4
* Complete Production README.md - Edmond
* Refine website and finish styling website - Alexandria
* Finish testing and debugging - All
