import uid from "uid";

export const categories = [
    {   
        id: uid(),
        name: "Programming",
        purpose: "programming",
        tags: "programming java javascript python computing web developer developer dev frontend backend app e-business videogames node.js node typescript php ios windows server database sql mysql ruby android git",
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
                purpose: "c-plus-plus",
                tags: "c\+\+",
            },
            {
                id: uid(),
                name: "Swift",
                purpose: "swift",
                tags: "swift",
            },
            {
                id: uid(),
                name: "PHP",
                purpose: "php",
                tags: "php",
            },
            {
                id: uid(),
                name: "Ruby",
                purpose: "ruby",
                tags: "ruby",
            },
            {
                id: uid(),
                name: "Node.js",
                purpose: "node-js",
                tags: "node.js node",
            },
            {
                id: uid(),
                name: "Games developer",
                purpose: "videogame-developer",
                tags: "videogames unity games",
            }
        ]
    },
    {
        id: uid(),
        name: "Business",
        purpose: "business",
        tags: "sales finances accounting business law b2b b2c enterpreneur enterpreneurship marketing project-management linkedin",
        icon: "business-icon",
        subTopics: [
            {
                id: uid(),
                name: "Sales",
                purpose: "sales",
                tags: "sales",
                subTopics: null
            },
            {
                id: uid(),
                name: "Accounting",
                purpose: "accounting",
                tags: "accounting",
                subTopics: null
            },
            {
                id: uid(),
                name: "Marketing",
                purpose: "marketing",
                tags: "marketing analytics product seo adwords social advertising ad",
                subTopics: null
            },
            {
                id: uid(),
                name: "Enterpreneurship",
                purpose: "enterpreneurship",
                tags: "enterpreneurship enterpreneur startup start-up",
                subTopics: null
            },
            {
                id: uid(),
                name: "Finance",
                purpose: "finance",
                tags: "finance finances",
                subTopics: null
            }
        ]
    },
    // {
    //     id: uid(),
    //     name: "Personal growth",
    //     purpose: "personal-growth",
    //     tags: "leadership happiness religion hobbies motivation",
    //     icon: "personal-growth-icon"
    // },
    {
        id: uid(),
        name: "Design",
        purpose: "design",
        tags: "css scss sass typography drawing illustration photoshop UI UX palette",
        icon: "design-icon",
        subTopics: [
            {
                id: uid(),
                name: "Web design",
                purpose: "web-design",
                tags: "web website css responsive ui ux sass scss",
                subTopics: null
            },
            {
                id: uid(),
                name: "Photoshop",
                purpose: "photoshop",
                tags: "photoshop",
                subTopics: null
            },
            {
                id: uid(),
                name: "Illustrator",
                purpose: "illustrator",
                tags: "illustrator",
                subTopics: null
            },
            {
                id: uid(),
                name: "Logo design",
                purpose: "logo-design",
                tags: "logo logotype",
                subTopics: null
            },
            {
                id: uid(),
                name: "Drawing",
                purpose: "drawing",
                tags: "draw drawing color colour paint",
                subTopics: null
            }
        ]
    },
    // {
    //     id: uid(),
    //     name: "Marketing",
    //     purpose: "marketing",
    //     tags: "marketing advertising relations publicity ads",
    //     icon: "marketing-icon",
    // },
    {
        id: uid(),
        name: "Photography",
        purpose: "photography",
        tags: "photography portrait lightroom photoshop cameras DSLR finalCut editing",
        icon: "photography-icon"
    },
    {
        id: uid(),
        name: "Music",
        purpose: "languages",
        tags: "music instrument harmonica trombone guitar bass drums blues rock soul pop",
        icon: "music-icon"
    },
    {   
        id: uid(),
        name: "Health & Fitness",
        purpose: "health-fitness",
        tags: "fitness dance yoga nutrition meditation sports gym dance running jogging running tennis football basketball golf boxing relaxing relax vegan vegetarian",
        icon: "health-icon",
        subTopics: [
            {
                id: uid(),
                name: "Fitness",
                purpose: "fitness",
                tags: "fitness",
                subTopics: null
            },
            {
                id: uid(),
                name: "Yoga",
                purpose: "yoga",
                tags: "yoga",
                subTopics: null
            },
            {
                id: uid(),
                name: "Nutrition",
                purpose: "nutrition",
                tags: "nutrition vegetarian vegan cooking cook",
                subTopics: null
            },
            {
                id: uid(),
                name: "Sports",
                purpose: "sports",
                tags: "tennis golf running basketball boxing gym cycling swimming bicicle",
                subTopics: null
            }
        ]
    },
    {
        id: uid(),
        name: "Academic studies",
        purpose: "academic-studies",
        tags: "math science humanities school algebra geometry ",
        icon: "academic-icon",
        subTopics: [
            {
                id: uid(),
                name: "Math",
                purpose: "math",
                tags: "math algebra geometry",
                subTopics: null
            },
            {
                id: uid(),
                name: "Social sciences",
                purpose: "science",
                tags: "economics accounting psicology law",
                subTopics: null
            },
            {
                id: uid(),
                name: "Art & Humanities",
                purpose: "art-humanities",
                tags: "art humanities history",
                subTopics: null
            }
        ]
    },
    {
        id: uid(),
        name: "Languages",
        purpose: "languages",
        tags: "speak spanish german arabic japanese portuguese chinese russian latin hebrew italian",
        icon: "languages-icon"
    }
];