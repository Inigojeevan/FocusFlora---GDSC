import styled from 'styled-components';
import Tags from "../components/Tags"
const App = () => {
  return (
   <>
      <Title>Focus<span className="green">Flora</span></Title>
      <Tags />
   </> 
  )
}

export default App;

const Title = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;

  .green {
    color: lightgreen
  }
  `;