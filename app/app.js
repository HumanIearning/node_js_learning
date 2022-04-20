"use strict";

// module
const express = require('express');  // import 같은 느낌?
const app = express();  // 객체에 넣어주고

// route
const home = require('./src/routes/home')


app.set('views', './src/views');  // view 파일들이 있는 폴더 지정
app.set('view engine', 'ejs');  // 뷰엔진 지정 ejs가 유명함



app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded());
app.use('/', home);   // use : 미들웨어 등록 메서드 // home은 next();가 없기 때문에 맨 마지막에 써줘야함

module.exports = app; // 다른 파일과 연동 하기위함