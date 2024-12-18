/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false;
const isVerifiedUser = true;
const hasSpecialPermission = false;
const hasTemporaryPass = false;

let isAccess;

// your code
isAccess = isAdmin || isVerifiedUser && hasSpecialPermission && hasTemporaryPass;




// while (isAccess){
//     if (isAdmin === false) {
//         isAccess = false;
//     } else if (isVerifiedUser === true){
//         isAccess = false;
//     } else if (hasSpecialPermission === true){
//         isAccess = false;
//     } else if (hasTemporaryPass === false){
//         isAccess = false;
//     }else {
//         isAccess = true;
//     }
// }

// isAccess = isAdmin ? true : false;
// isAccess = isVerifiedUser ? true : false;
// isAccess = hasSpecialPermission ? true : false;
// isAccess = hasTemporaryPass ? true : false;
