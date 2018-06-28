const currentPageCourses = (courses, page) => {
    const coursesPerPage = 12;
    
    const courseGroups = courses.map((course, index) => {
        return index % coursesPerPage === 0 
        ?
            courses.slice(index, index + coursesPerPage)
        :
            null;
    }).filter((course) => course);

    return courses.length > 0 ? courseGroups[page - 1] : [];
};

export default currentPageCourses;