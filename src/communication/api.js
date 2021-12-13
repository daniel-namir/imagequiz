let backendBaseUrl = "http://localhost:4002";
let getFlowers = () => {
    return fetch(`${backendBaseUrl}/flowers`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
    }).then((x) => x.json());
};

let getQuiz = (name) => {
    return fetch(`${backendBaseUrl}/quiz/${name}`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
    }).then((x) => x.json());
};

let saveScore = (quizTaker, quizName, score) => {
    return fetch(`${backendBaseUrl}/score`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ quizTaker, quizName, score }),
    }).then((x) => x.json());
};

let login = (email, password) => {
    console.log("communication login");
    return fetch(`${backendBaseUrl}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ email, password }),
    }).then((x) => x.json());
};

let add = (a, b) => {
    return fetch(`${backendBaseUrl}/add/${a}/${b}`, {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        }
    }).then((x) => x.json());
};

let logout = () => {
    console.log("communication login");
    return fetch(`${backendBaseUrl}/logout`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
    }).then((x) => x.json());
};

let register = (name, email, password) => {
    return fetch(`${backendBaseUrl}/register`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ name, email, password }),
    }).then((x) => x.json());
};

let api = {
    getFlowers: getFlowers,
    getQuiz: getQuiz,
    saveScore: saveScore,
    login: login,
    logout: logout,
    register: register,
};
export default api;