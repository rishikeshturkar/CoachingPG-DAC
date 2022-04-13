var UserProfile = (function() {
    var id="";
    var full_name = "";
    var email ="";
    var role ="";
    var attend="";
    var c1="";
    var c2="";
    var c3="";
    var add="";
    var getAttend = ()=>{return attend;}
    var getC1 = ()=>{return c1;}
    var getC2 = ()=>{return c2;}
    var getC3 = ()=>{return c3;}
    var getAdd = ()=>{return add;}
    var setAttend = (att)=>{attend=att;}
    var setC1 = (cc)=>{c1=cc;}
    var setC2 = (cc)=>{c2=cc;}
    var setC3 = (cc)=>{c3=cc;}
    var setAdd = (aa)=>{add=aa;}
    var getId =()=>{return id;}
    var setId=(i)=>{id=i;}
    var getEmail =function() {
        return email;
    };

    var setEmail = function(em) {
        email=em;
    };

    var getRole =function() {
        return role;
    };

    var setRole = function(em) {
        role=em;
    };

    var getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      full_name = name;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName,
      getEmail: getEmail,
      setEmail: setEmail,
      getRole: getRole,
      setRole: setRole,
      getId: getId,
      setId: setId,
      getC1: getC1,
      setC1: setC1,
      getC2: getC2,
      setC2: setC2,
      getC3: getC3,
      setC3: setC3,
      getAttend: getAttend,
      setAttend: setAttend,
      getAdd: getAdd,
      setAdd: setAdd
    }
  
  })();
  
  export default UserProfile;