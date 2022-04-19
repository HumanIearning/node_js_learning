"use strict";

const express = require('express')
const router = express.Router();

const ctrl = require('./home.ctrl');

// index.ejs를 렌더링 해주는 함수를 줌
router.get('/', ctrl.home);

// 라우터 주소에는 정규식 및 특수 패턴(:id) 사용가능    :id 의 id는 req.params.id에 저장됨
router.get('/login', ctrl.login)

module.exports = router;