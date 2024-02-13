const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/tryamb',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tryamb Sachan',
  profileImg:'./images/bio-image.jpeg',
  education:'KIET Group of Institutions, Delhi-NCR, Ghaziabad',
  role: 'Full Stack Web & Android Developer',
  description:
    "Welcome! Specializing in dynamic web applications and Android experiences, I bring a comprehensive skill set to every project. Final year BTech student at KIET Group of Institutions, Delhi-NCR. Explore my work below to see how I integrate creativity, functionality, and user experience into every solution. Eager to contribute to impactful projects.",
  resume: './Tryamb_Sachan_Resume.docx.pdf',
  
  social: {
    linkedin: 'https://www.linkedin.com/in/tryamb19/',
    github: 'https://github.com/tryamb',
  },
}

const projects = [
  {
    name: ' Student Reside: Housing & Food Finder',
    description:[
      "Created a user-friendly mobile app that offers a list of hostels and PGs, along with tiffin centers, to reduce students' accommodation and food search time.",
      'Enabled study material sharing, with PDF downloads, and included a chat feature for students, supporting 2 types of messages: text and image.'
   ],
    stack: ['XML', 'Kotlin', 'Java', 'Firebase', 'Razorpay', 'WebView'],
    sourceCode: 'https://github.com/Tryamb/StudentReside',
    livePreview: 'https://drive.google.com/file/d/16Im8e94MpJAR2iZUIDxYz4IIBC2XLZzG/view?usp=sharing',
    image:"./images/sr.png",
  },
  {
    name: 'Expense Management Backend API',
    description:[
      'Developed a robust backend API using Node.js, Express, and MongoDB for an expense management system, implementing endpoints for user signup, login, forget password, change password, and JWT token authentication to ensure secure access.',
      'Designed endpoints for adding expenses with title, date, and amount to centralized storage for each user and retrieval from the database.'
   ],
    stack: ['NodeJs', 'ExpressJs', 'MongoDB'],
    sourceCode: 'https://github.com/Tryamb/Notes',
    livePreview: 'https://ten-notes.vercel.app/',
    image:"./images/mern_api.png",
  },
  {
    name: 'Aero Sense: Weather forecasting app',
    description:[
      'Delivers weather updates with loading time less than 5 ms.',
      'Fetches real-time data from OpenWeather API, providing forecasts with up to 95% accuracy.'
   ],
    stack: [ 'HTML', 'CSS', 'Javascript', 'ReactJS',' OpenWeather API'],
    sourceCode: 'https://github.com/Tryamb/Aero-Sense',
    livePreview: 'https://aero-sense.netlify.app/',
    image:"./images/aerosense.png",
  },
  {
    name: 'AR Length Measurement App',
    description:[
      'Measures the length of any real-world object without physical tape, requires camera permission for detecting the plane and augmenting a 3D line.',
      'Provides 98% accurate results while measuring the length of any object.'
   ],
    stack: [ 'C#', 'Augmented Reality (AR plane manager, AR raycast)', 'Unity3D (Line renderer)'],
    sourceCode: 'https://github.com/Tryamb/AR-Measurement',
    livePreview: 'https://www.linkedin.com/posts/tryamb19_augmentedreality-unity3d-appdevelopment-activity-6870479955726336000-vM-3?utm_source=share&utm_medium=member_desktop',
    image:"./images/ar.png",
  },
]

const experiences=[
  {
     icon:'https://hazyaztechnologies.com/wp-content/uploads/2023/07/hazyaz_logo_text-Copy.png',
     name:'Hazyaz Technologies',
     position:'Android Development Intern',
     time:'Mar 2023 - May 2023',
     description:[
      'Acquired practical knowledge in utilizing essential technologies and features such as Cloud Firebase, SQLite, LiveData, RecyclerView with Adapters, Glide, and ExoPlayer.',
      'Worked on 3 android applications during internship using XML for UI and kotlin for backend services.'
   ],
     stack:['XML','Java','Kotlin','Cloud Firebase', 'SQLite',]
  },
  {
    icon:'https://www.kiet.edu/uploads/department/student_club/499741750.jpg',
    name:'DSC-KIET',
    position:'Web Developer',
    time:'Jan 2022 - Apr 2022',
    description:[
      'Contributed actively to the "DSC-KIET" College Development Club for 4 months, leveraging my expertise as a web developer to enhance skill-building activities.',
      'Mentored junior members, fostering collaboration and providing guidance within the club.'
   ],
    stack:['HTML','CSS','JavaScript']
  },
  {
    icon:'https://mysticalproductions.co.in/images/logo-450x450.png',
    name:'Mystical Production Pvt. Ltd.',
    position:'AR Development Trainee',
    time:'June 2021 - Aug 2021',
    description:[
       'Learnt about marker based AR using Vuforia Engine and marker less AR using AR foundation, made length measurement app using Unity Engine and C#.'
    ],
    stack:['HTML','Java','MYSQL']
  }
]
const skillcategory=[
  'Languages',
  'Libraries and Frameworks',
  'Databases',
  'Others'
]
const skills = [

  ['C++','Kotlin','Java','HTML','CSS','JavaScript'],
  ['Bootstrap','React','Redux','Node'],
  ['MySQL','Mongo DB','Firebase'],
  ['Android Studio','Git','AWS','Unity 3D']
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'trayambsachan2003@gmail.com',
  linkedin:'https://www.linkedin.com/in/tryamb19/',
  phone:'+919580365590'
}

export { header, about, projects, experiences, skills, skillcategory, contact }
