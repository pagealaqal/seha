function validateRegister() {
  var name = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var goal = document.getElementById("goal").value;
  var terms = document.getElementById("terms").checked;

  if (name === "" || email === "" || password === "" || goal === "" || !terms) {
    window.alert("غير مقبول: يرجى تعبئة جميع البيانات والموافقة على الإقرار.");
  } else if (password.length < 6) {
    window.alert("غير مقبول: كلمة المرور يجب أن تكون 6 أحرف على الأقل.");
  } else {
    window.alert("مقبول: تم التحقق من بيانات التسجيل.");
  }
  return false;
}

function validateOrder() {
  var name = document.getElementById("customerName").value;
  var phone = document.getElementById("phone").value;
  var meal = document.getElementById("meal").value;
  var address = document.getElementById("address").value;

  if (name === "" || phone === "" || meal === "" || address === "") {
    window.alert("غير مقبول: يرجى تعبئة بيانات الطلب.");
  } else {
    window.alert("مقبول: تم تجهيز الطلب للمراجعة.");
  }
  return false;
}

function calculateTotal() {
  var quantities = [
    Number(document.getElementById("salmonCount").value),
    Number(document.getElementById("chickenCount").value),
    Number(document.getElementById("wrapCount").value)
  ];
  var prices = [42, 36, 28];
  var items = 0;
  var total = 0;

  for (var i = 0; i < quantities.length; i++) {
    items = items + quantities[i];
    total = total + quantities[i] * prices[i];
  }

  var message;
  if (items === 0) {
    message = "اختاري وجبة واحدة على الأقل.";
  } else if (total >= 100) {
    message = "الإجمالي " + total + " ر.س — حصلتِ على توصيل مجاني.";
  } else {
    message = "الإجمالي " + total + " ر.س — رسوم التوصيل 8 ر.س.";
  }

  document.getElementById("totalResult").innerHTML = message;
  return false;
}

window.alert("مرحبًا بك في موقع مطعم الوجبات الصحية");
