import EASTC from './assets/images/eastc.png';
import TUNZADATA from './assets/images/tunzadata.png';
import STOCKMANAGER from './assets/images/stock.png';
/* Skills */

export const SoftwareDevskillData = [
    {
      id: 1,
      name: "HTML5",
    },
    {
      id: 2,
      name: "CSS3",
    },
    {
      id: 3,
      name: "JavaScript",
    },
    {
      id: 4,
      name: "Sass",
    },
    {
      id: 5,
      name: "Bootstrap",
    },
    {
      id: 6,
      name: "ReactJS",
    },
    {
      id: 7,
      name: "Python",
    },
    {
        id: 8,
        name: "Django",
    },
    {
        id: 9,
        name: "Django rest framework",
    },
    {
        id: 10,
        name: "GraphQL",
    },
    {
        id: 11,
        name: "MySQL",
    },
    {
        id: 12,
        name: "Postgres DB",
    },
    {
      id: 13,
      name: "Git",
    },
    {
      id: 14,
      name: "GitHub",
    },
  ];

  export const DataAnalyticsskillData = [
    {
        id: 1,
        name: "Microsoft excel",
    },
    {
      id: 2,
      name: "Stata",
    },
    {
      id: 3,
      name: "R language",
    },
    {
      id: 4,
      name: "IBM SPSS",
    },
    {
        id: 5,
        name: "SQL",
      },
    {
      id: 6,
      name: "Pandas",
    },
    {
        id: 7,
        name: "Numphy",
    },
    {
        id: 8,
        name: "Matplotlib",
    },
    {
      id: 9,
      name: "ODK (Open Data Kit)",
    },
    {
      id: 10,
      name: "Survey solutions",
    },
  ];

  export const TabHeadingsData = ["Ifakara Health Institute","Ifakara Health Institute","Remote work"]

  export const TabPanelsData = [
    {
      'id':1,
      'heading':"Apprentice (Data systems unit)",
      'dates':"July - November 2019",
      'abbreviation':"@ ihi",
      'duties':[
        "Programing data collection tools",
        "Data management of on going projects",
        "Analysing on going projects data",
        "Aggragate server configurations",
        "Transcripting audios from qualitative studies",
        "Configuring tablets for data collection"
      ]
    },
    {
      'id':2,
      'heading':"Apprentice (Data systems unit)",
      'dates':"July - November 2020",
      'abbreviation':"@ ihi",
      'duties':[
        "Programing data collection tools",
        "Data management of on going projects",
        "Analysing on going projects data",
        "Aggragate server configurations",
        "Transcripting audios from qualitative studies",
        "Configuring tablets for data collection"
      ]
    },
    {
      'id':3,
      'heading':"Freelancer",
      'dates':"November 2019 - to date",
      'abbreviation':"",
      'duties':[
        "Programing data collection tools",
        "Data management of on going projects",
        "Analysing on going projects data",
        "Aggragate server configurations",
        "Transcripting audios from qualitative studies",
        "Configuring tablets for data collection"
      ]
    }
  ]


export const ProjectsData = [
  {
    'id':1,
    'project_setting':'featured project',
    'heading':'PT management system',
    'photo':`${EASTC}`,
    'stacks':['Django', 'HTML', 'Css', 'Bootstrap'],
    'content': 'This is a university pratical training. it is meant to help university management in controlling students during their field practical training',
    'project_link':'samwelgodfrey.pythonanywhere.com',
    'github_link':'sdfgdfhdh'
  },
  {
    'id':2,
    'project_setting':'featured project',
    'heading':'Business MS',
    'photo':`${TUNZADATA}`,
    'stacks':['Django', 'Chart.js', 'SAAS'],
    'content': 'This is a business managment system made specifically for shop owner for ease and smooth management of their business. it is still in testing phase',
    'project_link':'http://www.tunzadata.xyz',
    'github_link':'sdfgdfhdh'
  },
  {
    'id':3,
    'project_setting':'featured project',
    'heading':'Stock management system',
    'photo':`${STOCKMANAGER}`,
    'stacks':['Django', 'HTML', 'Css', 'Bootstrap'],
    'content': 'This is a stock managment system running under organization premises (IHI). it was built to help logistic manager in maintaining organizational stock',
    'project_link':'/',
    'github_link':'sdfgdfhdh'
  },
]
