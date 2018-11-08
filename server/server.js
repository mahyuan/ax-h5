let express = require('express');
let fs = require('fs');
const app = express();
const PORT = 4003;
const routes = [
    {
        name: "home_data",
        pype: "get",
        path: "/api/home_data"
    },
    {
        name: "project_list",
        pype: "get",
        path: "/api/get_projet_list"
    },
    {
        name: "project_list",
        pype: "get",
        path: '/api/get_detail/:pid'
    },
    {
        name: "activity_info",
        pype: "get",
        path: "/api/activity/list"
    },
    {
        name: "activity_info",
        pype: "get",
        path: "/api/activity/detail/:aid"
    },
    {
        name: "persional",
        pype: "get",
        path: "/api/personal"
    }
]
routes.forEach((route, index) => {
    let { name, path } = route;
    
    app.get(path, function(req, res) {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        res.setA
        fs.readFile('./mook/' + name + '.json', function(err, data) {
            if(err) throw err;
            console.log(`get request from ${path}, response: ${data}`);
            
            res.json(JSON.parse(data));
        })
    })
})

app.listen(PORT, () => {
    console.log(`mook server start at prot ${PORT}.....`);
})
