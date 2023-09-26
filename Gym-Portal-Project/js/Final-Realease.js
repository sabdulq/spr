/*
 Filename: Final-Realease
 Written by: Saif abdul qadeer
 Purpose: Making final prject for example senario of gym
 A user will be asked to input info in stepb by step form methord
 Date: 13 Dec 2022
 Modification History:
*/

$(document).ready(function() {
  /*************************************************
   NAME:not given

   PURPOSE:
      Enable arrow icons and activating accordion
      widget and styling it   
   PARAMEATERS:none 
   RESULTS:none
  **************************************************/
  $( function() {
    var icons = {
       header: "ui-icon-circle-arrow-e",
       activeHeader: "ui-icon-circle-arrow-s"
      };
      $( "#accordion" ).accordion({
        icons: icons,
        collapsible:true,
        heightStyle:"fill",
        
      });
    });
  
  /*************************************************
   NAME:not given

   PURPOSE:
      Activating dialog widget for div id main 
      and styling it   
   PARAMEATERS:none 
   RESULTS:Display div as an dialog
  **************************************************/  
  $( function() {
    $( "#main" ).dialog({
      resizable: false,
      height: "auto",
      width: 700,
      modal: true,
      autoOpen:false,
  
    });
    
  });
  /*************************************************
   NAME:not given

   PURPOSE:
      Activating dialog widget for div id dialog-message 
      and styling it   
   PARAMEATERS:none 
   RESULTS:Display div as an dialog
  **************************************************/  
  $( function() {
    $( "#dialog-message" ).dialog({
      modal: true,
      autoOpen:false,
      buttons: {
        Next: function() {
          $( this ).dialog( "close" );
          $("#tabs-1").hide();
          $("#tabs-2").show();
        }
      }
    });
  });

  /*************************************************
   NAME:not given

   PURPOSE:
     making a dialog open when button is pressed   
   PARAMEATERS:none 
   RESULTS: Dialog opens when button is pressed
  **************************************************/  
  $("#join").click(function(){
    
    $("#main").dialog("open");
  
  })
  /*************************************************
   NAME:not given

   PURPOSE:
      Activating dialog widget for div id Output 
      and styling it   
   PARAMEATERS:none 
   RESULTS:Displays div as an dialog
  **************************************************/  
  $( function() {
    $( "#Output" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      autoOpen:false,
      buttons: {
        "Confirm": function() {
          $( this ).dialog( "close" );
          $("#dialog-message").dialog("open")
        },
        Edit: function() {
          $( this ).dialog( "close" );
          $(this).empty();
        }
      }
    });
  });

  /*************************************************
   NAME:not given

   PURPOSE:
      Activating button widget for for all buttons   
   PARAMEATERS:none 
   RESULTS:
  **************************************************/  
  $( "button" ).button();
  
  /*************************************************
   NAME:not given

   PURPOSE:
      Making div to only appear when submit button
      is preassed   
   PARAMEATERS:none 
   RESULTS:Displays div when button is preased
  **************************************************/  
  $("#submit").click(function(){
    $("#Output").show();
     
  })

  /*************************************************
   NAME:not given

   PURPOSE:
      Activating datepicker widget for div id Date   
   PARAMEATERS:none 
   RESULTS:
  **************************************************/  
  $( "#Date" ).datepicker({					 
      inline: true
  });
  

  //tags for emails
  var emailTags = [
      '@gmail.com',
      '@yahoo.com',
      "@iu.edu"
  ];
  
  /*************************************************
   NAME:not given

   PURPOSE:
      Activating autocomplete widget for div id email   
   PARAMEATERS:none 
   RESULTS:
  **************************************************/  
  $("#email").autocomplete({
      source: emailTags,
  });

  /*************************************************
   NAME:not given

   PURPOSE:
      making autocomplete in such a way that it shows 
      emailtags after each letter user inputs   
   PARAMEATERS:none 
   RESULTS:
  **************************************************/  
  $("#email").keyup(function() {
      var add = [];
      for (var i = 0; i < emailTags.length; i++)
          
          add[i] = $(this).val() + emailTags[i];
      
          $(this).autocomplete( "option", "source", add);
   
  });//email autocomplete ends

  /* End jQuery UI Library */
  

  /* Validation plugin - Define form functionality */
  $.validator.setDefaults({
  /*************************************************
   NAME:not given

   PURPOSE:giving names to each input value and echo
      to output div       
   PARAMEATERS:none 
   RESULTS:Output div echos users inputs
  **************************************************/  
    submitHandler: function() {
        
      var strUsername = $('#Username').val();		//usename
          
      var strpassword = $('#password').val();			// Password

      var strDate = $('#Date').val();						// birth Day
        
      var strphoneNo = $('#phoneNo').val();					// Phone
        
      var stremail = $('#email').val();			// Email
        
      // Send all data to output dialog
      $('#Output').dialog("open").append("<br> Username: " + strUsername)
                                .append("<br><br> Password: " + strpassword)
                                .append("<br><br> Birth date: " + strDate)
                                .append("<br><br> Phone: " + strphoneNo)
                                .append("<br><br> Email: " + stremail);
                            

       
    }, // end submitHandler
  }); // end validator.setDefaults
    

  /*************************************************
  NAME:not given
  PURPOSE:
      validatinf Fist form id ="myForm" using coustom rules 
      and giving eror messages   
  PARAMEATERS:none 
  RESULTS:
  **************************************************/  
  $("#myForm").validate({            
    rules: {
      userName: {							//<input name="userName">
        required: true,
                  minlength:2,
        maxlength: 10
      },
      password: {							//<input name="password">
        required: true,
        minlength: 5
      },
      date: {								//<input name="date">
        required: true,
        date: true
      },
      phone: {							//<input name="phone">
        required: true,
        digits: true,
                  minlength:10,
        maxlength: 10
      },
      email: {							//<input name="email">
        required: true,
        email: true,
      }
      
    }, // end rules
    messages: {                             
      userName: {							//<input name="userName">
        required: "Please enter a username",
        minlength: $.validator.format("Must have atleast {2} characters"),
        maxlength: $.validator.format("Must not have more than {0} characters")
              },
      password: {							//<input name="password">
        required: "Please provide a password",
        minlength: $.validator.format("Must have at least {0} characters")
      },
      phone: {							//<input name="phone">
        required: "Please enter a phone number",
        digits: "Please enter digits only",
        minlength: $.validator.format("Must have 10 digits"),
                  maxlength: $.validator.format("Must not have more than 10 digits")
      },
      email: {							//<input name="email">
        required: "Please enter an email address",
        email: "Please enter a valid email address"
      }
      
    }  // end messages
  }); // end First form myForn.validate
  /* End Validation plugin */



  /*************************************************
   NAME:not given

   PURPOSE:
      Making div to only appear when submit button
      is preassed   
   PARAMEATERS:none 
   RESULTS:Displays div when button is preased
  **************************************************/  
  $("#submit2").click(function(){
    $("#Output2").show();
     
  })

  /*************************************************
   NAME:not given

   PURPOSE:
      activating checkboxradio widget and styling it   
   PARAMEATERS:none 
   RESULTS:none
  **************************************************/
  $( "input[type='radio']" ).checkboxradio({		// Radio buttons
      icon: true,		// hide icon
  });
  
  /*************************************************
   NAME:not given

   PURPOSE:
      Activating tabs widget and styling it   
   PARAMEATERS:none 
   RESULTS:none
  **************************************************/
  $( function() {
    $( "#tabs" ).tabs({
      collapsible: true
    });
  } );

  /*************************************************
   NAME:not given

   PURPOSE:
      activating spinner widget and styling it   
   PARAMEATERS:
      min:1
      max:600   
   RESULTS:none
  **************************************************/
  $( "#currentWeight" ).spinner({min: 1, max: 600});	// Define the #currentWeight input as a spinner

  /*************************************************
   NAME:not given

   PURPOSE:
      activating spinner widget and styling it   
   PARAMEATERS:
      min:1
      max:600   
   RESULTS:none
  **************************************************/
  $( "#goalWeight" ).spinner({min: 1, max: 600});	// Define the #goalWeight input as a spinner

  /*************************************************
   NAME:not given

   PURPOSE:
      activating checkboxradio widget and styling it   
   PARAMEATERS:none 
   RESULTS:none
  **************************************************/
  $( "input[type='checkbox']" ).checkboxradio({	// Checkboxes
      icon: true,
            
  });

  /*************************************************
   NAME:not given

   PURPOSE:
      activating radio widget and styling it   
   PARAMEATERS:none 
   RESULTS:none
  **************************************************/
  $(function() {								// Slider - Hours traveled
      $( "#slider-range" ).slider({
          range: true,
          min: 0,
          max: 24,
          values: [ 2, 5 ],					// Initial Values
          slide: function( event, ui ) {
              $( "#hours" ).val( ui.values[ 0 ] + " - "+ ui.values[ 1 ] );
          }
      }); // end slider-range
    
  $( "#hours" ).val( $( "#slider-range" ).slider( "values", 0 ) +
          " - " + $( "#slider-range" ).slider( "values", 1 ) );
  }); // end function

  //tags for gial 
  var availableTags = [
      "Lose weight",
      "cardio",
      "Yoga",
      "Strength Training",
      "gain",
      "weight",
      "fasf",
      "goal",
      "Aerobics",
      "Training"
  ];
  /*************************************************
   NAME:not given

   PURPOSE:
      Activating autocomplete widget for div id goal   
   PARAMEATERS:none 
   RESULTS:
  **************************************************/
  $( "#Goal" ).autocomplete({
      source: availableTags
  });

  /*************************************************
   NAME:not given

   PURPOSE:
      Activating dialog widget for div id dialog-message2 
      and styling it   
   PARAMEATERS:none 
   RESULTS:Display div as an dialog
  **************************************************/
  $( function() {
    $( "#dialog-message2" ).dialog({
      modal: true,
      autoOpen:false,
      buttons: {
        Next: function() {
          $( this ).dialog( "close" );
          $("#tabs-2").hide();
          $("#tabs-3").show();

        }
      }
    });
  });

  /*************************************************
   NAME:not given

   PURPOSE:
      Activating dialog widget for div id Output2 
      and styling it   
   PARAMEATERS:none 
   RESULTS:Displays div as an dialog
  **************************************************/
  $( function() {
    $( "#Output2" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      autoOpen:false,
      buttons: {
        "Confirm": function() {
          $( this ).dialog( "close" );
          $("#dialog-message2").dialog("open")
          
        },
          
        Edit: function() {
          $( this ).dialog( "close" );
          $(this).empty();
          
        }
        
      }
      
    });
    
  });
  
  /*************************************************
  NAME:not given
  PURPOSE:
      validatinf secound form id ="myForm" using coustom rules 
      and giving eror messages   
  PARAMEATERS:none 
  RESULTS:
  **************************************************/  
  $.validator.setDefaults({
    submitHandler: function() {
      var strGender = $('input[name="Gender"]:checked').val();// Gender 
          
      var strWorkout = "";											// Favorite Workout
        
      var strcurrentWeight = $('#currentWeight').val();					// current Weight
        
      var strgoalWeight = $('#goalWeight').val();					// goal Weight
        
      var strHours = $( "#hours" ).val();					// workout Hours
        
      var strGoalacter = $( "#Goal" ).val();		//  goal
    
      $('input[name="Workout"]:checked').each(function() {		// List checked Workout
        
        strWorkout += $(this).val() + ", ";
          
      });
      
      // Send all data to output area
      $('#Output2').dialog("open").append("<br><br> Gender: " + strGender)
                                  .append("<br><br> Intrested Workouts: " + strWorkout)
                                  .append("<br><br> Current Weight: " + strcurrentWeight +" lbs")
                                  .append("<br><br> Goal Weight: " + strgoalWeight +" lbs")
                                  .append("<br><br> Workout Hours: " + strHours)
                                  .append("<br><br> Goal: " + strGoalacter);
      }, // end submitHandler
      
      // Defines the placement of the validation error message  Instructions: https://jqueryvalidation.org/reference/
    /*************************************************
      NAME:not given
      PURPOSE:
        Setting the placement of the validation error message
          for the following
      PARAMEATERS:none 
      RESULTS:
    **************************************************/  
      errorPlacement: function (error, element) {
        if (element.attr("id") == "currentWeight") {
        
          error.insertAfter($(element).parent());
        //goalWeight eror placement
        }else if (element.attr("id") == "goalWeight") {
          
          error.insertAfter($(element).parent());
      
        //Workout eror placement
        } else if (element.attr("name") == "Workout") {
          
          error.insertAfter($("#HIIT"));

        } else {

          error.insertAfter(element);
        
        }
      } // end errorPlacement

    }); // end validator.setDefaults
    
  /*************************************************
  NAME:not given
  PURPOSE:
      validatinf Fist form id ="myForm2" using coustom rules 
      and giving eror messages   
  PARAMEATERS:none 
  RESULTS:
  **************************************************/  
  $("#myForm2").validate({            
    rules: {
      Workout: {						//<input name="workout">
        required: true
      },
        
      CurrentWeight: {					//<input name="CurrentWeight">  
        required: true,  
        digits: true,            
        minlength:2,            
        maxlength:3  
      },
        
      GoalWeight: {					//<input name="GoalWeight">
        required: true,
        digits: true,
        minlength:2,
        maxlength:3 
      },
      goal: {						//<input name="goal">
        required: true,
        maxlength: 50
      }
    }, // end rules
    
    messages: {                             // These messages are displayed when user input doesn't match the rules
      Workout: {						//<input name="workout">
        required: "Please select atleast 1 workout"
      },
        
      CurrentWeight: {					//<input name="CurrentWeight">
        required: "Please enter your current weight",
        minlength: $.validator.format("Must enter atleast 2 digits"),
        maxlength: $.validator.format("con't enter more than 3 digits")
      },
               
      GoalWeight: {					//<input name="GoalWeight">
        required: "Please enter your Goal weight",
        minlength: $.validator.format("Must enter atleast 2 digits"),
        maxlength: $.validator.format("con't enter more than 3 digits")
      },
        
      goal: {						//<input name="goal">
        required: "Pleasr describe your goal"
      }
      }  // end messages
  }); // end flintstoneForm.validate
  /* End Validation plugin */
  
  /*************************************************
   NAME:none

   PURPOSE:
      Making div to only appear when submit button
      is preassed   
   PARAMEATERS:none 
   RESULTS:Displays div when button is preased
  **************************************************/
  $("#submit3").click(function(){
    $("#Outputss").show();
      
  })
  
  /*************************************************
   NAME:none

   PURPOSE:
      activating checkboxradio widget and styling it   
   PARAMEATERS:none 
   RESULTS:none
  **************************************************/ 
  $( "input[type='radio']" ).checkboxradio({		// Radio buttons
      icon: true,		// hide icon
  });

  /*************************************************
   NAME:none

   PURPOSE:
      Activating dialog widget for div id dialog-message3 
      and styling it   
   PARAMEATERS:none 
   RESULTS:Display div as an dialog
  **************************************************/
  $( function() {
    $( "#dialog-message3" ).dialog({
      modal: true,
      autoOpen:false,
      buttons: {
        ok: function() {
          $( this ).dialog( "close" );
          $("#main").dialog("close");
          $("#tabs-1").hide();
          $("#tabs-2").hide();
          $("#tabs-3").hide();

        }
      }
    });
  } );

  /*************************************************
   NAME:none

   PURPOSE:
      Activating dialog widget for div id Output3 
      and styling it   
   PARAMEATERS:none 
   RESULTS:Displays div as an dialog
  **************************************************/
  $( function() {
    $( "#Outputss" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      autoOpen:false,
      buttons: {
        "Confirm": function() {
          $( this ).dialog( "close" );
          $("#dialog-message3").dialog("open")
        },
        Edit: function() {
          $( this ).dialog( "close" );
          $(this).empty();
        }
      }
    });
  });
    
  $.validator.setDefaults({
    
  /*************************************************
   NAME:none

   PURPOSE:giving names to each input value and echo
      to output div       
   PARAMEATERS:none 
   RESULTS:Output div echos users inputs
  **************************************************/
    submitHandler: function() {
        // Scrape Data
        var strPlan = $('input[name="Plan"]:checked').val();// Gender 
        // Send all data to output area
        $('#Outputss').dialog("open").append("<br> The plan you selected is: " + strPlan)

      }, // end submitHandler
      
    }); // end validator.setDefaults
    
  /*************************************************
  NAME:not given
  PURPOSE:
      validatinf Fist form id ="myForm3" using coustom rules 
      and giving eror messages   
  PARAMEATERS:none 
  RESULTS:
  **************************************************/  
    $("#myForm3").validate({             // notice that flintstoneForm is the id of the html form
      rules: {
      }, // end rules
      messages: {                             // These messages are displayed when user input doesn't match the rules
        }  // end messages
    }); // end flintstoneForm.validate
    /* End Validation plugin */
}); 
           