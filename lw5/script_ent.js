function checkEmail(str) {
    var result = str.match(/^[0-9-a-z-\.]+\@[0-9-a-z]{1,}\.[a-z]{2,}$/i);
    var result2 = str.match(/^\d[\d\(\)\ -]{9,14}\d$/);
    if (!result || !result2) {
      return false;
    } 
    //if (!result2) {
    //  return false;
   /// }
    return true;
  }
  mail_field.onblur = function() {
    if (!checkEmail(this.value)) {
      mailAddErrMesage();
    } else {
      document.getElementsByClassName('registration__login')[0].style.backgroundColor = 'green';
    }
  }
  mail_field.onfocus = function() {
    document.getElementsByClassName('registration__login')[0].style.backgroundColor = '#484d56';
    mail_field.parentNode.removeChild(mail_alert_id);
  }





  password_field.onblur = function() {
    var pass = document.getElementsByClassName('password-block__password')[0].value;
    if (!checkPassword(pass, this.value)) {
      passwordAddErrMesage();
    } else {
      document.getElementsByClassName('password-block__password')[0].style.backgroundColor = 'green';
    }
  }
  
  password_field.onfocus = function() {
    document.getElementsByClassName('password-block__password')[0].style.backgroundColor = '#484d56';
    password_field.parentNode.removeChild(password_alert_id);
  }
  
  function checkPassword(pass, confirm) {
    if (pass.length < 6) {
      return false;
    }
    if (pass != confirm) {
      return false;
    }
    return true;
  }


  function registration() {
    var email = document.getElementsByClassName('registration__login')[0].value;
    var pass = document.getElementsByClassName('password-block__password')[0].value;
    if (checkEmail(email) && checkPassword(pass, passConfirm)) {
      return true;
    } else {
      mailAddErrMesage();
      passwordAddErrMesage();
    }
    return false;
  }
  
  document.getElementsByClassName('registration')[0].onsubmit = function() {
    return registration();
  };