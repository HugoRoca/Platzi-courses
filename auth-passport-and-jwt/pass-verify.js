const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .75';
  const hash = '$2b$10$Rp6z5X7jG/aarHij9530Pekizl5ZtxtQpQkCB0z.lOlXDI/ufkgWS';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
