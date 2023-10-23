import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  isLoggedIn: boolean,
}

const About = ({isLoggedIn}: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn){
      navigate('/')
    }
    // eslint-disable-next-line
  },[]);
  

  return(
    <>
      <h1>About</h1>
    </>
  );
}

export default About;