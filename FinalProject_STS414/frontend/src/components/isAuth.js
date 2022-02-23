import jwt from 'jsonwebtoken';

export var userId = null;
export var admin = null;

if(localStorage.getItem('profile')) {
    const token = localStorage.getItem('profile').split('"')[3];
    const decoded = jwt.decode(token);
    userId = decoded.id;
    admin = decoded.admin;
}