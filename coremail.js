// ==UserScript==
// @name         Coremail simplify
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Simplify USTC coremail page
// @author       Daniel Shao
// @match        https://email.ustc.edu.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ustc.edu.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const USERNAME = '';
    const PASSWORD = '';

    function removeElementById(name) {
        let target = document.getElementById(name);
        if (target) {
            target.remove();
        }
    }

    function removeElementByClass(name) {
        document.querySelectorAll("." + name).forEach(function (item) {
            item.remove();
        });
    }

    (function simplify() {
        console.log("Start to clear.");
        // 清除Copyright
        removeElementById("copyright_area");
        removeElementByClass("mainPanel");
        console.log("Clear end.");
    })();

    (function auto() {
        // 自动登录
        let loginBut = document.getElementById("login_button");
        if (loginBut) {
            console.log("找到登录按钮：尝试自动登录");
            let uidInput = document.getElementById("uid");
            let passwdInput = document.getElementById("password");
            if (uidInput && passwdInput) {
                uidInput.value = USERNAME;
                passwdInput.value = PASSWORD;
                loginBut.click();
            }
        }
    })();
})();
