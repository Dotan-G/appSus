export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    formatDate

}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 7) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function formatDate() {
    var date = new Date();
    var years = date.getFullYear();
    var months = date.getMonth() + 1;
    var days = date.getDay();
    var timeFormat = years + '-' + (months + '').padStart(2, '0') + '-' + (days + '').padStart(2, '0');
    return timeFormat;
};