const fobiddenNames = ["admin", "Brian"];
export const validateUserName = (username: string) => !fobiddenNames.includes(username);
export const validatePassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;
