const currentPageCourses = (courses, page) => {
    const courseListSize = 12;
    
    const courseGroups = courses.map((course, index) => {
        return index % courseListSize === 0 
        ?
            courses.slice(index, index + courseListSize)
        :
            null;
    }).filter((course) => course);

    return courses.length > 0 ? courseGroups[page - 1] : [];
};

export default currentPageCourses;