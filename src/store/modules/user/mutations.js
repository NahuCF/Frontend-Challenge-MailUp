export default {
    setUserData(state, payload) {
        sessionStorage.setItem('userData', JSON.stringify(payload))
    }
}