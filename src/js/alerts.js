    function ShowTip(msg, type,bgColor,borderColor,fontColor) {
        var $tip = $('.tips');
        var top=$tip.length*45+10
            var $tip = $('<div class="tips" style="position: fixed;right:-200px;padding: 10px 20px;box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);'+
                        'border-radius:8px;z-index:99;border:1px solid;display: flex;justify-content: center;align-items: center;"></div>');
            $('body').append($tip);
            $tip.stop(false).text(msg).css({ 
                                        // 'translation':'cubic-bezier(0,.66,.72,1.3)',
                                        'color':fontColor,
                                        'background-color':bgColor,
                                        'border-color':borderColor,
                                        'top':top
                                        }).animate({
                                            right:10
                                        },500).delay(3000).animate({
                                            top:-100
                                        },1000,function(){
                                            this.remove()
                                        });
                                    }

    function PrimaryAlert(msg) {
        ShowTip(msg, 'primary','#cfe2ff','#9ec5fe','#0a58ca');
    }
    function SuccessAlert(msg) {
        ShowTip(msg, 'success','#d1e7dd','#a3cfbb','#146c43');
    }
    function DangerAlert(msg) {
        ShowTip(msg, 'danger','#f8d7da','#f1aeb5','#b02a37');
    }
    function WarningAlert(msg) {
        ShowTip(msg, 'warning','#fff3cd','#ffe69c','#997404');
    }
    function InfoAlert(msg) {
        ShowTip(msg, 'info','#cff4fc','#9eeaf9','#087990');
    }
    function LightAlert(msg) {
        ShowTip(msg, 'light','#fcfcfd','#e9ecef','#6c757d');
    }
    function DarkAlert(msg) {
        ShowTip(msg, 'dark','#ced4da','#adb5bd','#495057');
    }
    export default{
        PrimaryAlert,
        SuccessAlert,
        DangerAlert,
        WarningAlert,
        InfoAlert,
        LightAlert,
        DarkAlert
    }