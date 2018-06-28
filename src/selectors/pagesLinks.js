const getVisiblePagesLinks = (courses = []) => {
    const coursesPerPage = 12;
    
    const numberOfPages = courses.map((course, index) => {
        return index % coursesPerPage === 0 
        ?
            true
        :
            null;
    }).filter((course) => course);

    return numberOfPages.map((page, index) => {
        return index + 1
    });
};

export default getVisiblePagesLinks;