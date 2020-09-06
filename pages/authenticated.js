import nookies from 'nookies';
import { firebaseAdmin } from 'config/firebaseAdmin';
import { firebaseClient } from 'config/firebaseClient';

export const getServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email } = token;

    // the user is authenticated!
    // FETCH STUFF HERE

    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` },
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return { props: {}};
  }
};

const Authenticated = (props) => (
  <div style={{padding: 40}}>
    <p>{props.message}</p>
    <button
      onClick={async () => {
        await firebaseClient.auth().signOut();
        window.location.href = '/';
      }}
    >
      Sign out
    </button>
  </div>
);

export default Authenticated;