export const emailProps = {
  label: "Email Address*",
  name: "email",
  type: "email",
  placeholder: "Enter Email Address",
  autoComplete: "off",
};

export const passwordProps = {
  label: "Password",
  name: "password",
  type: "password",
  placeholder: "Enter Password",
  autoComplete: "off",
  divClassName: "password",
  buttonClassName: "toggle_button",
};

export const REGX = {
  Email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/,
  Password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[|)(@\<{}>[\]/$!%*?:;.,=&_#~"'`^+-])[A-Za-z\d|)(@\<{}>[\]/$!%*?:;.,=&_#~"'`^+-]{8,16}$/,
};
