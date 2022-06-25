import AuthForm from '../components/auth/form';
import AuthPage from '../components/auth/page';

const title = 'Sign Up';
const subTitle = 'Hello there! Sign up and start managing your system';
const link = { title: 'Sign In', route: '/sign-in' };

const SignUp = () => (
  <AuthPage title={title} subTitle={subTitle} link={link}>
    <AuthForm />
  </AuthPage>
);

export default SignUp;
