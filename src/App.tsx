import styled from 'styled-components';
import Tags from "../components/Tags"
import Timer from "../components/Timer"
const App = () => {
  return (
   <>
      <Title>Focus<span className="green">Flora</span></Title>
      <Tags />
      <Timer />
   </> 
  )
}

export default App;

const Title = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  .green {
    color: lightgreen
  }
  `;