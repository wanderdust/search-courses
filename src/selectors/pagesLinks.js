export const getVisiblePagesLinks = (courses = []) => {
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


export const getCurrentPagination = (pagination = [], currentPage = 1) => {
    let visiblePreviousPages = (currentPage - 3) < 0 ? 0 : (currentPage - 3);
    let visibleForwardPages = currentPage + 1;

    if (pagination.length <= 4 ) {
        return pagination;
    } else if (pagination.length > 4 && currentPage <= 3) {
        visiblePreviousPages = 0;
        visibleForwardPages = 4;
    } else if (currentPage === pagination.length) {
        visiblePreviousPages = currentPage - 4;
        visibleForwardPages = currentPage;
    }

    const visiblePagination = pagination.slice(visiblePreviousPages, visibleForwardPages);
    return visiblePagination;
};