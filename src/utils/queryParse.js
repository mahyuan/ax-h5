export default function parseUrl(url) {
    let query = url.split("?")[1];
    let queryArr = query.split("&");
	let params = {};
    queryArr.forEach((item) => {
        let value = item.split("=")[1];
        let key = item.split("=")[0];
        params[key] = value;
	});
    return params;
}
