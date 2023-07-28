import { useCookies } from 'react-cookie';

const cookieName = 'Username';

function useAuthUsernameCookie() {
  const [cookies] = useCookies([cookieName]);
  const usernameCookie = cookies[cookieName];

  const SetUsernameCookie = (username) => {
    useCookies([cookieName], username, { domain: 'localhost' });
  };

  const RemoveUsernameCookie = () => {
    useCookies([cookieName], null);
  };

  return { usernameCookie, SetUsernameCookie, RemoveUsernameCookie };
}
export default useAuthUsernameCookie;