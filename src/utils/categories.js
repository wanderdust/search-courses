import uid from "uid";

export const categories = [
    {   
        id: uid(),
        name: "Programming",
        purpose: "programming",
        tags: "programming java javascript python computing web developer developer dev frontend backend app e-business videogames node.js node",
        icon: "programming-icon",
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
        tags: "sales finances accounting business law b2b b2c enterpreneur enterpreneurship",
        icon: "business-icon",
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
        tags: "leadership happiness religion hobbies motivation",
        icon: "personal-growth-icon"
    },
    {
        id: uid(),
        name: "Design",
        purpose: "design",
        tags: "design",
        icon: "design-icon"
    },
    {
        id: uid(),
        name: "Marketing",
        purpose: "marketing",
        tags: "marketing advertising relations publicity ads",
        icon: "marketing-icon"
    },
    {
        id: uid(),
        name: "Photography",
        purpose: "photography",
        tags: "photography",
        icon: "photography-icon"
    },
    {   
        id: uid(),
        name: "Health & Fitness",
        purpose: "health-fitness",
        tags: "health fitness yoga nutrition meditation sports",
        icon: "health-icon"
    },
    {
        id: uid(),
        name: "Academic studies",
        purpose: "academic-studies",
        tags: "math science humanities",
        icon: "academic-icon"
    },
    {
        id: uid(),
        name: "Languages",
        purpose: "languages",
        tags: "spanish german arabic japanese portuguese chinese russian latin hebrew italian",
        icon: "languages-icon"
    }
];