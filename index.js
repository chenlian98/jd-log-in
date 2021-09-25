/*formValidator  表单验证*/
function formValidator() {
    let warning = document.querySelector('.logo-in-wrap .logo-in .register .menu .warning');
    let user = document.querySelector('.logo-in-wrap .logo-in .register .menu .menu-user input');
    let pwd = document.querySelector('.logo-in-wrap .logo-in .register .menu .menu-password input');
    let user_ico = document.querySelector('.logo-in-wrap .logo-in .register .menu .menu-user span');
    let pwd_ico = document.querySelector('.logo-in-wrap .logo-in .register .menu .menu-password span');
    let btn = document.querySelector('.logo-in-wrap .logo-in .register .menu .btn-register');
    let empty1  = document.querySelector('.logo-in-wrap .logo-in .register .menu .menu-user i');
    let empty2  = document.querySelector('.logo-in-wrap .logo-in .register .menu .menu-password i');

    // let empty = document.querySelectorAll('.logo-in-wrap .logo-in .register .menu i');
    // for (let i = 0; i < empty.length; i++) {
    //     empty[i].onclick = function () {
    //         user.value = '';
    //         pwd.value = '';
    //     }
    // }
    empty1.onclick = function () {
        user.value = '';
    }
    empty2.onclick = function () {
        pwd.value = '';
    }
    btn.onclick = function () {
        if(!user.value && !pwd.value){
            //true
             user.classList.add('active')
             user_ico.classList.add('active');
             pwd.classList.add('active');
             pwd_ico.classList.add('active');
             warning.classList.add('blank');
             empty1.classList.add('active');
             empty2.classList.add('active');

            user.onfocus= function () { //鼠标获取焦点 登录框
                user.classList.remove('active')
                user_ico.classList.remove('active');
            }
            pwd.onfocus= function () {//鼠标获取焦点 密码框
                pwd.classList.remove('active');
                pwd_ico.classList.remove('active');
            }

        }else{
             warning.classList.remove('blank');
             empty1.classList.remove('active');
             empty2.classList.remove('active');
             alert('登录成功') //false
        }
    }
}formValidator()

/*tab切换*/
function tab() {
 let qr_code_logo_in = document.querySelector('.logo-in-wrap .logo-in .register .logo-in-box');//扫码登录大盒子
 let menu = document.querySelector('.logo-in-wrap .logo-in .register .menu'); //账户登录大盒子
 let tab_la = document.querySelector('.logo-in-wrap .logo-in .register .tab .l a');//扫码登录 tab列表
 let tab_ra = document.querySelector('.logo-in-wrap .logo-in .register .tab .r a');//账户登录 tab列表
    qr_code_logo_in.classList.add('reveal');
    tab_la.onclick = function () {
        qr_code_logo_in.classList.add('reveal');
        menu.classList.remove('menu-show');
        tab_la.classList.add('active');
        tab_ra.classList.remove('active');
    }

    tab_ra.onclick = function () {
        qr_code_logo_in.classList.remove('reveal');
        menu.classList.add('menu-show');
        tab_la.classList.remove('active');
        tab_ra.classList.add('active');
    }
}tab()

//二维码页面
function qrCode(){
    let qr_code_box = document.querySelector('.logo-in-wrap .logo-in .register .qr-code');
    let qr_code_img = document.querySelector('.logo-in-wrap .logo-in .register .qr-code .show-img');
    let qr_code_block = document.querySelector('.logo-in-wrap .logo-in .register .qr-code-none');
    qr_code_box.onmouseover = function (){
        qr_code_img.classList.add('move');
        qr_code_block.classList.add('show');
    }
    qr_code_box.onmouseout = function (){
        qr_code_img.classList.remove('move');
        qr_code_block.classList.remove('show');
    }
    // console.log(qr_code_block,qr_code_box,qr_code_img);
} qrCode()
