export function login(dipatch, name) {
    dipatch({type: 'login',payload: name})
}