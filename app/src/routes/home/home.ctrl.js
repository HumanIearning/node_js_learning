"use strict";

const output = {
    // request는 모르겟고 일단 response로 ./views/home/index.ejs를 띄움
    // 앞에 ./views가 붙는 이유는 아까 app.js에서 view폴더를 views로 지정 했기 때문에 알아서 붙음
    home: (req, res) => {  
        res.render('home/index');
    },

    // 위와 동일
    login: (req, res) => {
        res.render('home/login');
    }
}

const users = {
    id: ["human", "learning", "data"],
    password: ["123", "456", "789"]
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            password = req.body.password;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);

            if (users.password[idx] == password) {
                return res.json({
                    success: true,
                })
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        })
    }
}


// 다른 파일과 연동
module.exports = {
    output,
    process,
};

