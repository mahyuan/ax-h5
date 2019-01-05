export function formateDate(date) {
    if (typeof date !== ('string' || 'number')) {
        return date;
    }
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDay();
    return `${year}.${month}.${day}`;
}
