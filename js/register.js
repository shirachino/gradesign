import '../plug/vue/vue.min.js';
import '../plug/jquery/jquery-3.6.0.min.js';
Vue.config.devtools = true;

var regvm = new Vue({
    el: '#reg',
    data() {
        return {
            regInfo: {
                regName: '',
                regTelNum: '',
                regPsw: '',
                regSecPsw: '',
                regAgree: false
            }
        }
    },
    created() {

    },
    watch: {
        'regInfo.regName'(newVal) {
            var regExp = /^[a-zA-Z0-9_]{6,16}$/;
            // console.log(regExp.test(newVal));
            if (regExp.test(newVal)) {
                $('#reg-name-t').show()
                $('#reg-name-f').hide()
            } else {
                $('#reg-name-t').hide()
                $('#reg-name-f').show()
            }
        },
        'regInfo.regTelNum'(newVal) {
            var regExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
            if (regExp.test(newVal)) {
                $('#reg-telnum-f').hide()
            } else {
                $('#reg-telnum-f').show()
            }
        },
        'regInfo.regPsw'(newVal) {
            var regExpEasy = /^[0-9]{6,16}$/
            var regExpMid = /^[a-zA-Z0-9]{6,16}$/
            var regExpStrong = /^[a-zA-Z0-9-*/+~`!@#$%^&*()]{6,16}$/
            if (regExpEasy.test(newVal)) {
                $('#reg-psw-f').hide()
                $('.ruo').removeClass('default').siblings('em').addClass('default')
            } else if (regExpMid.test(newVal)) {
                $('#reg-psw-f').hide()
                $('.zhong').removeClass('default').siblings('em').addClass('default')
            } else if (regExpStrong.test(newVal)) {
                $('#reg-psw-f').hide()
                $('.qiang').removeClass('default').siblings('em').addClass('default')
            } else {
                $('.safe').find('em').addClass('default')
                $('#reg-psw-f').show()
            }
        },
        'regInfo.regSecPsw'(newVal) {
            if (this.regInfo.regPsw != newVal) {
                $('#reg-sec-psw-f').show()
            } else {
                $('#reg-sec-psw-f').hide()
            }
        }
    },
    methods: {
        submitRegForm() {
            //1.判断用户是否同意协议
            if (!this.regInfo.regAgree) {
                alert('请阅读并同意用户协议')
            }
            //2.将用户名发到后端查询，是否被使用，若无重名继续执行，有重名则让reg-name-rf显示，并中断提交

            //3.将用户信息赋值给后端数据库，完成注册
            //4.进入注册成功等待页面，跳转至登录页面

        }
    }
})