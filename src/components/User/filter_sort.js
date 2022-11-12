// import {User} from './User.js'
const User = require('./User.js');

let user1 = new User('user1');
user1.setProperty("gender", "male").setProperty("post_time", 3);
let user2 = new User('user2');
user2.setProperty("gender", "female").setProperty("post_time", 2);
let user3 = new User('user3');
user3.setProperty("gender", "male").setProperty("post_time", 1);

let user_list = [user1, user2, user3];

//filter users based on attribute and condition
const filter_func = (user_list, attribute, cond) => {
    return user_list.filter(user => user[attribute] === cond);
}

//sort users based on attribute and condition
const sort_func = (user_list, attribute) =>{
    return user_list.sort(user => user[attribute])
}
