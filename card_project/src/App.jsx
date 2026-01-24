import React from 'react'

import Card from './components/card'

const App = () => {

 const jobData = [
  {
    company: "Amazon",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    role: "Senior UI/UX Designer",
    posted: "5 days ago",
    type: "Full-Time",
    level: "Senior",
    salary: "$120/hr",
    location: "Seattle, USA"
  },
  {
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    role: "Product Manager",
    posted: "3 days ago",
    type: "Full-Time",
    level: "Mid",
    salary: "$130/hr",
    location: "Mountain View, USA"
  },
  {
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    role: "Cloud Solutions Architect",
    posted: "1 week ago",
    type: "Full-Time",
    level: "Senior",
    salary: "$150/hr",
    location: "Redmond, USA"
  },
  {
    company: "Apple",
    logo: "https://indieground.net/wp-content/uploads/2024/03/indieblog-apple-logo-4.jpg",
    role: "iOS Software Engineer",
    posted: "2 days ago",
    type: "Full-Time",
    level: "Mid",
    salary: "$140/hr",
    location: "Cupertino, USA"
  },
  {
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    role: "Data Scientist",
    posted: "5 days ago",
    type: "Full-Time",
    level: "Senior",
    salary: "$145/hr",
    location: "Menlo Park, USA"
  },
  {
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    role: "UX Researcher",
    posted: "7 days ago",
    type: "Part-Time",
    level: "Mid",
    salary: "$130/hr",
    location: "Los Gatos, USA"
  },
  {
    company: "Tesla",
    logo: "https://fabrikbrands.com/wp-content/uploads/Tesla-Logo-1-1155x770.png",
    role: "Vehicle Software Engineer",
    posted: "4 days ago",
    type: "Full-Time",
    level: "Mid",
    salary: "$135/hr",
    location: "Austin, USA"
  },
  {
    company: "IBM",
    logo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-2.jpg?width=672&height=448&name=ibm-logo-2.jpg",
    role: "Senior Cloud Consultant",
    posted: "6 days ago",
    type: "Contract",
    level: "Senior",
    salary: "$125/hr",
    location: "London, UK"
  },
  {
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    role: "Front-End Developer",
    posted: "2 days ago",
    type: "Full-Time",
    level: "Mid",
    salary: "$125/hr",
    location: "Stockholm, Sweden"
  },
  {
    company: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    role: "AI Research Engineer",
    posted: "3 days ago",
    type: "Full-Time",
    level: "Senior",
    salary: "$155/hr",
    location: "Santa Clara, USA"
  }
];

// company logo role etc are props which are forwared to card.jsx 

  return (
    <div className='parent'>

     {jobData.map(function(elem){
      return <Card company={elem.company} logo={elem.logo} role={elem.role} posted={elem.posted} type={elem.type}
       level = {elem.level} salary={elem.salary} location ={elem.location}/>
     })}

    </div>
  )
}

export default App
