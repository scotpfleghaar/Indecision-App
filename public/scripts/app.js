console.log("App.js is running");

// JSX JavaScript XML
var template = < h1 id = "someid" > This is JSX from app.js < /h1>;

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);