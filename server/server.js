let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const PORT = 4003;
const routes = [
	{
			name: "home_data",
			type: "get",
			path: "/api/home_data"
	},
	{
			name: "project_list",
			type: "get",
			path: "/api/get_projet_list"
	},
	{
			name: "project_list",
			type: "get",
			path: '/api/get_detail/:pid'
	},
	{
			name: "activity_info",
			type: "get",
			path: "/api/activity/list"
	},
	{
			name: "activity_info",
			type: "get",
			path: "/api/activity/detail/:aid"
	},
	{
			name: "persional",
			type: "get",
			path: "/api/personal"
	},
	{
		name: "putApply",
		type: "post",
		path: "/api/apply/submit"
	},
	{
		name: "apply_list",
		type: "get",
		path: "/api/apply/list"
	},
	{
		name: "invitation",
		type: "get",
		path: "/api/invate/list"
	}
]

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type, accept');
	if(req.method === 'OPTIONS') {
		res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE');
		res.setHeader('Content-Type', 'application/json;charset=utf-8');
		res.setHeader('Access-Control-Allow-Credentials', true);
	}
	next();
})

routes.forEach((route, index) => {
	let { name, path } = route;
	let type = route.type;

	if (type === 'get') {
		app.get(path, function(req, res) {
			let { query } = req;
			fs.readFile('./mock/' + name + '.json', function(err, data) {
				if(err) throw err;
				res.json(JSON.parse(data));
			})
		})
	}

	if (type === 'post') {
		app.post(path, function(req, res) {
			let params = req.body;
			res.send({
				"code": 0,
				"msg": ''
			})
		})
	}

})

app.listen(PORT, () => {
    console.log(`mook server start at prot ${PORT}.....`);
})
