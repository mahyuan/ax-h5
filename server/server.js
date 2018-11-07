let express = require('express');
let fs = require('fs');
const app = express();

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
        fs.readFile('./mook/' + name + '.json', function(err, data) {
            if(err) throw err;
            res.json(JSON.parse(data));
        })
    })
})


// routes.forEach((route, index) => {
// 	let name = route.name;

// 	app[route.type](route.url, function(req, res) {
// 		res.setHeader('Content-Type', 'application/json;charset=utf-8');
// 		fs.readFile('./' + name + '.json', function(err, data) {
// 			if(err) throw err;
// 			res.json(JSON.parse(data));
// 		})
// 	})
// })

app.listen(4003, () => {
    console.log('mook server start at prot 4003.....');
})
