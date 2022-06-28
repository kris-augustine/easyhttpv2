// Instantiate the class
const http = new EasyHTTP()

// Get Users
// This returns a promise
http.get('https://jsonplaceholder.typicode.com/users')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

// Get a Single User
http.get('https://jsonplaceholder.typicode.com/users/3')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

const user = {
    name: 'Kris August',
    username: 'Kris',
    email: 'krisaugust@gmail.com',
}

// Create User
http.post('https://jsonplaceholder.typicode.com/users', user)
    .then((user) => console.log(user))
    .catch((err) => console.log(err))

// Update User
http.put('https://jsonplaceholder.typicode.com/users/6', user)
    .then((user) => console.log(user))
    .catch((err) => console.log(err))

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2', user)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
