import useAuthUsernameCookie from './AuthService';


function useUsernameCookie() {
  const usernameCookie = useAuthUsernameCookie.getUsernameCookie();

  const setUsernameCookie = (username) => {
    setUsernameCookie(username);
  };

  return { usernameCookie, setUsernameCookie };
}

export { useUsernameCookie };
