

const profiles = [
    {
        _id: 1,
        title: "Michael Oluwasola1",
        bloodGroup: "o+",
        Age: 21,

    },
    {
        _id: 2,
        title: "Michael Oluwasola2",
        bloodGroup: "o+",
        Age: 21,

    },
    {
        _id: 3,
        title: "Michael Oluwasola3",
        bloodGroup: "o+",
        Age: 21,

    },
    {
        _id: 4,
        title: "Michael Oluwasola4",
        bloodGroup: "o+",
        Age: 21,

    },
    {
        _id: 5,
        title: "Michael Oluwasola5",
        bloodGroup: "o+",
        Age: 21,

    },
    {
        _id: 6,
        title: "Michael Oluwasola6",
        bloodGroup: "o+",
        Age: 21,

    },
    {
        _id: 7,
        title: "Michael Oluwasola7",
        bloodGroup: "o+",
        Age: 21,

    },
    {
        _id: 8,
        title: "Michael Oluwasola8",
        bloodGroup: "o+",
        Age: 21,

    },
    {
        _id: 9,
        title: "Michael Oluwasola9",
        bloodGroup: "o+",
        Age: 21,

    },
    {
        _id: 10,
        title: "Michael Oluwasola10",
        bloodGroup: "o+",
        Age: 21,

    },
    {
        _id: 11,
        title: "Michael Oluwasola11",
        bloodGroup: "o+",
        Age: 21,

    },
];

export function getProfiles() {
    return profiles
}

export function getBloodGroup(id) {
    return profiles.find(blood => blood._id === id)
}

