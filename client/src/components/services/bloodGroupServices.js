import http from './httpService'

export function getBloodGroups() {
    return http.get('http://localhost:5000/api/profile/all');
}

export function getUsername() {
    return http.get('http://localhost:5000/api/profile/username');
}