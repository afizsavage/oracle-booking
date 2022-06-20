import AuthForm from '../components/auth/form';
import AuthPage from '../components/auth/page';

const title = 'Sign in';
const subTitle = 'Hello there! Sign in and start managing your system';
const link = { title: 'Sign Up', route: '/sign-up' };

const SignIn = () => (
  <AuthPage title={title} subTitle={subTitle} link={link}>
    <AuthForm />
  </AuthPage>
);

export default SignIn;
