import uid from "uid";

export const categories = [
    {   
        id: uid(),
        name: "Programming",
        purpose: "Programming",
        tags: "programming java javascript python computing web developer developer dev frontend backend app e-business videogames node.js node typescript php ios windows server database sql mysql ruby android git",
        icon: "programming-icon",
        subTopics: [
            {
                id: uid(),
                name: "Javascript",
                purpose: "Javascript",
                tags: "javascript frontend front-end web-developer",
                subTopics: null
            },
            {
                id: uid(),
                name: "Python",
                purpose: "Python",
                tags: "python",
            },
            {
                id: uid(),
                name: "Java",
                purpose: "Java",
                tags: "java",
            },
            {
                id: uid(),
                name: "C#",
                purpose: "C#",
                tags: "C\# C sharp",
            },
            {
                id: uid(),
                name: "C++",
                purpose: "C plus plus",
                tags: "c\+\+",
            },
            {
                id: uid(),
                name: "Swift",
                purpose: "Swift",
                tags: "swift",
            },
            {
                id: uid(),
                name: "PHP",
                purpose: "PHP",
                tags: "php",
            },
            {
                id: uid(),
                name: "Ruby",
                purpose: "Ruby",
                tags: "ruby",
            },
            {
                id: uid(),
                name: "Node.js",
                purpose: "Node.js",
                tags: "node.js node npm",
            },
            {
                id: uid(),
                name: "Machine Learning",
                purpose: "Machine Learning",
                tags: "machine learning python deep artificial intelligence",
            },
            {
                id: uid(),
                name: "Games developer",
                purpose: "Games Developer",
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
                purpose: "Sales",
                tags: "sales",
                subTopics: null
            },
            {
                id: uid(),
                name: "Accounting",
                purpose: "Accounting",
                tags: "accounting",
                subTopics: null
            },
            {
                id: uid(),
                name: "Marketing",
                purpose: "Marketing",
                tags: "marketing analytics product seo adwords social advertising ad",
                subTopics: null
            },
            {
                id: uid(),
                name: "Enterpreneurship",
                purpose: "Enterpreneurship",
                tags: "enterpreneurship enterpreneur startup start-up",
                subTopics: null
            },
            {
                id: uid(),
                name: "Finance",
                purpose: "Finance",
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
        purpose: "Design",
        tags: "css scss sass typography drawing illustration photoshop UI UX palette",
        icon: "design-icon",
        subTopics: [
            {
                id: uid(),
                name: "Web design",
                purpose: "Web Design",
                tags: "web website css responsive ui ux sass scss",
                subTopics: null
            },
            {
                id: uid(),
                name: "Photoshop",
                purpose: "Photoshop",
                tags: "photoshop",
                subTopics: null
            },
            {
                id: uid(),
                name: "Illustrator",
                purpose: "Illustrator",
                tags: "illustrator",
                subTopics: null
            },
            {
                id: uid(),
                name: "Logo design",
                purpose: "Logo Design",
                tags: "logo logotype",
                subTopics: null
            },
            {
                id: uid(),
                name: "Drawing",
                purpose: "Drawing",
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
        purpose: "Photography",
        tags: "photography portrait lightroom photoshop cameras DSLR finalCut editing",
        icon: "photography-icon"
    },
    {
        id: uid(),
        name: "Music",
        purpose: "Languages",
        tags: "music instrument harmonica trombone guitar bass drums blues rock soul pop",
        icon: "music-icon"
    },
    {   
        id: uid(),
        name: "Health & Fitness",
        purpose: "Health and fitness",
        tags: "fitness dance yoga nutrition meditation sports gym dance running jogging running tennis football basketball golf boxing relaxing relax vegan vegetarian",
        icon: "health-icon",
        subTopics: [
            {
                id: uid(),
                name: "Fitness",
                purpose: "Fitness",
                tags: "fitness",
                subTopics: null
            },
            {
                id: uid(),
                name: "Yoga",
                purpose: "Yoga",
                tags: "yoga",
                subTopics: null
            },
            {
                id: uid(),
                name: "Nutrition",
                purpose: "Nutrition",
                tags: "nutrition vegetarian vegan cooking cook",
                subTopics: null
            },
            {
                id: uid(),
                name: "Sports",
                purpose: "Sports",
                tags: "tennis golf running basketball boxing gym cycling swimming bicicle",
                subTopics: null
            }
        ]
    },
    {
        id: uid(),
        name: "Academic studies",
        purpose: "Academic-studies",
        tags: "math science humanities school algebra geometry ",
        icon: "academic-icon",
        subTopics: [
            {
                id: uid(),
                name: "Math",
                purpose: "Math",
                tags: "math algebra geometry",
                subTopics: null
            },
            {
                id: uid(),
                name: "Social sciences",
                purpose: "Science",
                tags: "economics accounting psicology law",
                subTopics: null
            },
            {
                id: uid(),
                name: "Art & Humanities",
                purpose: "Art and Humanities",
                tags: "art humanities history",
                subTopics: null
            }
        ]
    },
    {
        id: uid(),
        name: "Languages",
        purpose: "Languages",
        tags: "speak spanish german arabic japanese portuguese chinese russian latin hebrew italian",
        icon: "languages-icon"
    }
];