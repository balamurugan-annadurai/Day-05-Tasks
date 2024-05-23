let resume = {
    "personalData" : {
        "name": "Balamurugan A",
        "age": 21,
        "mobileNumber": 863767890,
        "emailId": "bala@xyz.com"
    },
    
    "education" : [
        {
            "class": 10,
            "schoolName": "XyzSchool",
            "graduatedYear": 2018,
            "percentage": "75%"  
        },
        {
            "class": 12,
            "schoolName": "XyzSchool",
            "graduatedYear": 2020,
            "percentage": "85%"
        },
        {
            "degree": "B.E Mechanical Engineering",
            "collegeName": "Xyz",
            "graduatedYear": 2024,
            "percentage": "95%"
        }
    ],

    "skills" : {
        "programmingLanguage": ["C", "C++", "JavaScript", "Python"],
        "framework": ["Reactjs","Expressjs","Bootstrap"],
        "techStack" : "MERN STACK",
        "versionControl" : "Git and GitHub"
    },

    
    "languages" : ["Tamil" , "English"],
     
    "hobbies" : ["Video Editing","Content creation","Reading Books"],

    "projects" : [{
        "title":"Hotel Management System",
        "TechnologiesUsed": "C++" 
    },
    {
        "title" : "Portfolio Website",
        "TechnologiesUsed" : "HTML,CSS,JavaScript"
    }
]
}

let keys = Object.keys(resume); //object keys
let keysLength = keys.length;   //keys length

////////////for Loop////////////////////

for(let i=0;i<keysLength;i++){
    console.log(keys[i]);
    console.log(resume[keys[i]]);
    console.log("\n");
}

////////for in Loop//////////////////////

for(let key in resume){
    console.log(key);
    console.log(resume[key]);
    console.log('\n');
}

///////////////for of Loop////////////////

for(let key of keys){
    console.log(key);
    console.log(resume[key]);
    console.log('\n');}

//////////////forEach Loop/////////////////

keys.forEach((key)=>(console.log(key,"\n",resume[key],"\n")));