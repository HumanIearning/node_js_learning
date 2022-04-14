"use strict";


// request는 모르겟고 일단 response로 ./views/home/index.ejs를 띄움
// 앞에 ./views가 붙는 이유는 아까 app.js에서 view폴더를 views로 지정 했기 때문에 알아서 붙음
const home = (req, res) => {  
    res.render('home/index');
}

// 위와 동일
const login = (req, res) => {
    res.render('home/login');
}

// 다른 파일과 연동
module.exports = {
    home,
    login,
};

