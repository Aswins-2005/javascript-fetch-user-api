# JavaScript Fetch User API

A responsive user list web application built using **HTML, CSS, and JavaScript**. The application fetches user data from the JSONPlaceholder API and dynamically displays it as user cards.

## 🚀 Features

* Fetches user data using the JavaScript `fetch()` API
* Uses `async/await` for handling API requests
* Displays user information dynamically
* Shows:

  * Name
  * Email
  * Phone number
  * City
  * Company
* Loading indicator while fetching data
* Error handling using `try...catch`
* Responsive design for mobile devices
* Hover effect on user cards

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Fetch API
* JSONPlaceholder API

## 🔗 API Used

JSONPlaceholder Users API:

https://jsonplaceholder.typicode.com/users

## 📂 Project Structure

```text
javascript-fetch-user-api/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

1. The page loads and displays a loading indicator.
2. JavaScript sends a request to the JSONPlaceholder API using `fetch()`.
3. The API response is converted into JSON.
4. User data is passed to the `display()` function.
5. JavaScript dynamically creates user cards and adds them to the page.
6. The loading indicator is hidden after the request completes.

## 📱 Responsive Design

The application uses CSS Flexbox and a media query to make the user cards responsive on smaller screens.

## 👨‍💻 Author

Aswin S
