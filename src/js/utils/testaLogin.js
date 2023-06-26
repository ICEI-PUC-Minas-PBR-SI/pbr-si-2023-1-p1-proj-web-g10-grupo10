const isUserLoggedIn = () => { 
  !localStorage.getItem('usuario') && (window.location.href = "login.html");
}
isUserLoggedIn();