import bcrypt from "bcryptjs";

const passwordComparedSync = (passwordToTest, passwordHash) =>
bcrypt.compareSync(passwordToTest, passwordHash);

export default passwordComparedSync;