// parametros por defecto
function newfunction(name, age, country) {
  var name = name || 'hugo';
  var age = age || 26;
  var country = country || 'PE';

  console.log(name, age, country)
}

// es6
function newFunction2(name = 'hugo', age = 26, country = 'PE') {
  console.log(name, age, country)
}

newFunction2()
newFunction2('ricardo', 23, 'EC')
