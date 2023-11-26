const accountId = 14455;
let accountName = "Pranav";
var accountPassword = "11111";
accountCity = "Delhi";

accountName = "Ashish";
accountPassword = "22222";
accountCity = "Mumbai";

/*
    Prefer not to use VAR
    because of issue in block scope and funcional scope
*/

console.table([accountId, accountName, accountPassword, accountCity]);
