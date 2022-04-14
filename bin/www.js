"use strict";

const app = require('../app.js');    

const port = 3000;     // port번호를 상수로 지정

app.listen(port, () => {    // 서버 실행
    console.log("서버 가동");
});