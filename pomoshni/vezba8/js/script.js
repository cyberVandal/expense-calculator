

  function Proverka()                                    
  { 
      var name = document.forms["RegForm"]["username"];               
      var email = document.forms["RegForm"]["email"];    
      var embg = document.forms["RegForm"]["embg"];  
   
      var password = document.forms["RegForm"]["psw"];  
    
     
      if (name.value == "")                                  
      { 
          windows.alert("Please enter your name."); 
          name.focus(); 
          return false; 
      } 
     
         
      if (email.value == "")                                   
      { 
          window.alert("Please enter a valid e-mail address."); 
          email.focus(); 
          return false; 
      } 
     
      if (email.value.indexOf("@", 0) < 0)                 
      { 
          window.alert("Please enter a valid e-mail address."); 
          email.focus(); 
          return false; 
      } 
     
      if (email.value.indexOf(".", 0) < 0)                 
      { 
          window.alert("Please enter a valid e-mail address."); 
          email.focus(); 
          return false; 
      } 
     
      if (embg.value == "")                           
      { 
          window.alert("Please enter your telephone number."); 
          embg.focus(); 
          return false; 
      } 
     
      if (password.value == "")                        
      { 
          window.alert("Please enter your password"); 
          password.focus(); 
          return flase; 
      } 
     
   
     
      return true; 
  }
  --
      function validateEmail() {
         var emailID = document.myForm.email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myForm.email.focus() ;
            return false;
         }
         return( true );
      }