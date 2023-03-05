const videos = [
    {
        id: 65432445,
        title: 'The Chamber'
    },
    {
        id: 675465,
        title: 'Fracture'
    },
    {
        id: 70111470,
        title: 'Die Hard'
    },
    {
        id: 654356453,
        title: 'Bad Boys'
    },
];

const createIdTitleMap = (videos) => 

videos.reduce((idTitleMap, { id, title }) => {
        idTitleMap[id] = title;

        return idTitleMap;
    }, {});
    

console.log(createIdTitleMap(videos));