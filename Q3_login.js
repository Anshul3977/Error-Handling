const validCredentials = { username: "admin", password: "12345" };

function login(username, password) {
  if (!username) throw new Error("Username is required.");
  if (!password) throw new Error("Password is required.");
  if (username !== validCredentials.username || password !== validCredentials.password) {
    throw new Error("Invalid username or password.");
  }
  console.log("Login successful.");
}

try {
  login("admin", "12345");
  login("", "12345");
} catch (error) {
  console.error(error.message);
}
