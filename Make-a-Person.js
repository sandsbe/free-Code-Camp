
var Person = function(firstAndLast) {
    var fullName = firstAndLast;  
  
    this.setFullName = function(name) {
      fullName = name;
    };
    
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.getFullName = function() {
      return fullName;
    };
    
    this.getFirstName = function () {
      return fullName.split(' ')[0];
    };
  
    this.getLastName = function () {
      return fullName.split(' ')[1];
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
