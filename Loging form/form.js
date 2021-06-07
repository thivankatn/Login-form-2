  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCykW4tKypl5yBCXNQdpsVNXwVHIikodEE",
    authDomain: "t-chat-e9c61.firebaseapp.com",
    projectId: "t-chat-e9c61",
    storageBucket: "t-chat-e9c61.appspot.com",
    messagingSenderId: "892997796345",
    appId: "1:892997796345:web:bfd406d9ec9f08aaf3fd28",
    measurementId: "G-9JF6QQ7JZE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

    const auth = firebase.auth();


   function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
            window.location.href="1.html";
			//Take user to a different or home page
            
              
			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
      
      
		}
		
		
		
	});
	

