 window.onload = function (e) {
            document.getElementById("loader").style.display = "none";
            document.getElementById("content-wrapper").style.display = "block";

        }
        function captchaResponse(tokenResponse) {
            sendCUEMEevent('click', 'captchaResponse', tokenResponse);
        }
        function cancel() {
            cueme_closeWindow();
        }
