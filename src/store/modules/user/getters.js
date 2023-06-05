export default {
    getUserData(state) {
        return JSON.parse(sessionStorage.getItem('userData'))
    } 
}