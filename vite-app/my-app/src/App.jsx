import { useState } from 'react'
import './App.css'

function ProfileCard({img,name,job,bio,link}){
  return(
    <div>
    <h1>{name}</h1>
    <img src={img} />
    <p>{job}</p>
    <p>{bio}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="profile-link">
        View Profile →
    </a>

    </div>

  );
}


function App() {
  return (
  <div className="cards-container">
  <ProfileCard 
  img="https://randomuser.me/api/portraits/women/32.jpg"
  name="Arya Vats"
  job="Software Engineer"
  bio="Passionate about AI and full-stack development."
  link="https://github.com/aryavats"
  />

  <ProfileCard 
  img="https://randomuser.me/api/portraits/women/45.jpg"
  name="Sofia Kapoor"
  job="Data Scientist"
  bio="Loves turning data into insights and building ML models."
  link="https://linkedin.com/in/sofiakapoor"
  />
  <ProfileCard 
  img="https://randomuser.me/api/portraits/men/67.jpg"
  name="Rahul Mehta"
  job="UX Designer"
  bio="Designing user-friendly interfaces that people love."
  link="https://dribbble.com/rahulmehta"
  />

  <ProfileCard 
  img="https://randomuser.me/api/portraits/women/22.jpg"
  name="Nisha Singh"
  job="Product Manager"
  bio="Making products that solve real problems."
  link="https://twitter.com/nishasingh"
  />

  <ProfileCard 
  img="https://randomuser.me/api/portraits/men/89.jpg"
  name="Karan Sharma"
  job="DevOps Engineer"
  bio="Automating workflows and keeping systems scalable."
  link="https://github.com/karansharma"
  />


  </div>
  );
}

export default App
