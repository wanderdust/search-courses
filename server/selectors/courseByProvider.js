const { database } = require("../firebase/firebase");

const getCoursesByProvider = (provider) => {
    return database.ref("courses/").once("value")
        .then((snapshot) => {
            const courses = [];

            snapshot.forEach((childSnapshot) => {
                const childSnapshoLowerCase = childSnapshot.val().platform.toLowerCase();
                const providerLowerCase = provider.toLowerCase();
                
                if (childSnapshoLowerCase === providerLowerCase) {
                    courses.push({
                        ...childSnapshot.val(),
                        id: childSnapshot.key
                    });
                }
            });

            return courses;
        })
        .catch((e) => console.log(e));
};


module.exports = {
    getCoursesByProvider
};