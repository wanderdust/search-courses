import uid from "uid";

export const topics = [
    {   
        id: uid(),
        name: "Programming",
        purpose: "programming",
        tags: "programming java javascript python computing web developer developer development frontend backend app e-business videogames node.js",
        subTopics: [
            {
                id: uid(),
                name: "Javascript",
                purpose: "javascript",
                tags: "javascript frontend front-end web-developer",
                subTopics: null
            },
            {
                id: uid(),
                name: "Python",
                purpose: "python",
                tags: "python",
            },
            {
                id: uid(),
                name: "Java",
                purpose: "java",
                tags: "java",
            },
            {
                id: uid(),
                name: "C#",
                purpose: "c-sharp",
                tags: "C\#",
            },
            {
                id: uid(),
                name: "C++",
                purpose: "c++",
                tags: "c\+\+",
            },
            {
                id: uid(),
                name: "Swift",
                purpose: "swift",
                tags: "swift",
            },
        ]
    },
    {
        id: uid(),
        name: "Business",
        purpose: "business",
        tags: "sales finances accounting business law b2b b2c",
        subTopics: [
            {
                id: uid(),
                name: "Marketing",
                purpose: "marketing",
                tags: "marketing",
                subTopics: null
            }
        ]
    },
    {
        id: uid(),
        name: "Personal growth",
        purpose: "personal-growth",
        tags: "leadership happiness religion hobbies motivation"
    },
    {
        id: uid(),
        name: "Design",
        purpose: "design",
        tags: "design"
    },
    {
        id: uid(),
        name: "Marketing",
        purpose: "marketing",
        tags: "marketing advertising relations"
    },
    {
        id: uid(),
        name: "Photography",
        purpose: "photography",
        tags: "photography "
    },
    {   
        id: uid(),
        name: "Health & Fitness",
        purpose: "health-fitness",
        tags: "health fitness yoga nutrition meditation sports"
    },
    {
        id: uid(),
        name: "Academic studies",
        purpose: "academic-studies",
        tags: "math science humanities"
    },
    {
        id: uid(),
        name: "Languages",
        purpose: "languages",
        tags: "english spanish german arabic japanese portuguese chinese russian latin hebrew italian"
    }
];