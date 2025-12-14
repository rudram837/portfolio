jQuery(document).ready(function ($) {
  "use strict";

  $('form.php-email-form').on('submit', function (e) {
    e.preventDefault();

    let this_form = $(this);
    let action = this_form.attr('action');

    if (!action) {
      this_form.find('.error-message')
        .slideDown()
        .html('Form action is not set!');
      return;
    }

    this_form.find('.loading').slideDown();
    this_form.find('.error-message').slideUp();
    this_form.find('.sent-message').slideUp();

    $.ajax({
      type: "POST",
      url: action,
      data: this_form.serialize(),
      dataType: "json",
      headers: {
        "Accept": "application/json"
      },
      success: function () {
        this_form.find('.loading').slideUp();
        this_form.find('.sent-message').slideDown();
        this_form[0].reset(); // ✅ FORM CLEAR
      },
      error: function () {
        this_form.find('.loading').slideUp();
        this_form.find('.error-message')
          .slideDown()
          .html("Something went wrong. Please try again!");
      }
    });
  });
});

// jQuery(document).ready(function($) {
//   "use strict";

//   //Contact
//   $('form.php-email-form').submit(function() {
   
//     var f = $(this).find('.form-group'),
//       ferror = false,
//       emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

//     f.children('input').each(function() { // run all inputs
     
//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'email':
//             if (!emailExp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'checked':
//             if (! i.is(':checked')) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'regexp':
//             exp = new RegExp(exp);
//             if (!exp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     f.children('textarea').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     if (ferror) return false;
//     else var str = $(this).serialize();

//     var this_form = $(this);
//     var action = $(this).attr('action');

//     if( ! action ) {
//       this_form.find('.loading').slideUp();
//       this_form.find('.error-message').slideDown().html('The form action property is not set!');
//       return false;
//     }
    
//     this_form.find('.sent-message').slideUp();
//     this_form.find('.error-message').slideUp();
//     this_form.find('.loading').slideDown();
    
//     $.ajax({
//       type: "POST",
//       url: action,
//       data: str,
//       success: function(msg) {
//         if (msg == 'OK') {
//           this_form.find('.loading').slideUp();
//           this_form.find('.sent-message').slideDown();
//           this_form.find("input:not(input[type=submit]), textarea").val('');
//         } else {
//           this_form.find('.loading').slideUp();
//           this_form.find('.error-message').slideDown().html(msg);
//         }
//       }
//     });
//     return false;
//   });

// });
