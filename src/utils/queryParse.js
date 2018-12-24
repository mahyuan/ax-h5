export default function parseUrl(url) {
    const query = url.split('?')[1];
    const queryArr = query.split('&');
    const params = {};
    queryArr.forEach((item) => {
        const value = item.split('=')[1];
        const key = item.split('=')[0];
        params[key] = value;
    });
    return params;
}
