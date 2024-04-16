<h1 align="center">SkillSwap</h1>

## ![iPhone 15 Pro](https://github.com/TechLabs-Berlin/ws24-skillswap/assets/150553622/05288c05-eac7-4293-8f3c-8814a0f83ed7)


<p align="center">
  | <a href="#about">About</a>  |
  <a href="#demo">Demo</a> |
  <a href="#team">Team</a>  |
</p>

## About

SkillSwap is an online platform that connects individuals with various skills and facilitates skill exchange. This app will allow users to create profiles, list their skills, and search for others who are willing to exchange skills. It will provide features such as messaging, scheduling, and rating systems to ensure smooth and organized exchanges. As skills are exchanged, this app  addresses the issue of costs associated with acquiring new skills.

## Demo

### Figma Prototype:

[Skillswap - Copy.zip](https://github.com/TechLabs-Berlin/ws24-skillswap/files/14972143/Skillswap.-.Copy.zip)

### Presentation:

https://docs.google.com/presentation/d/1KK2WRizRiJPulXIwZtVArvBL4gbKfUckWBo4-a3WJm0/edit?usp=sharing

### How to run Frontend and Backend

- Frontend:
Go into the "frontend" directory and run "npm run dev".
In case any packages are missing, run "npm install" first.
Frontend app will run on localhost port 5173.

Run the app in Mobile resolution (e.g. 430*932) for best experience.

- Backend:
Go into the "server" directory and run "nodemon dev".
In case any packages are missing, run "npm install" first.
Backend Server will run on localhost port 8000.

A common error when starting the backend is "Nodemon error: IP not whitelisted on MongoDB Atlas". If this is the case, please reach out to Andreas and we will try to add you to our MongoDB Atlas Database.

The Backend also runs online on this URL: https://ws24-skillswap.onrender.com and all API endpoints can be accessed online. So there is technically no need to run the Backend server locally. 

Since it is hosted on the free version of Render, it will slow down when inactive. Therefore, before using the app, we recommend opening https://ws24-skillswap.onrender.com/message in the browser first to guarantee the server is up to speed.

All API documentation for our backend API endpoints can be found in "server/API docs/". The middleware to ensure API requests are coming from authenticated users is technically ready, but is commented out for all routes, to allow for quicker testing from the Frontend client.

## Team

### Contributors:

- DS: Johannes Schaum 
- UX: Faith Jegede, Isabella Oelofse
- WD: Andreas Landes (FE & BE), Lexie Yu  (FE), Maryam Arghandiwa (FE), Najma Faiz (FE)



### Mentors:

- UX: Maria Mendes
- WD: Larry Almeida

