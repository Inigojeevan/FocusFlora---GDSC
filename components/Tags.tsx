import styled, { css } from "styled-components";
import { useContext } from "react";
import { StateContext } from "./StateProvider"; 

interface TagProps {
  activeTag: boolean;
  disabled?: boolean; // Add disabled prop
}

const Tags = () => {
  const { activeTag, setActiveTag, isActive } = useContext(StateContext); // Retrieve isActive state

  const handleTagClick = (index: number) => {
    if (!isActive) { // Allow tag switching only if the timer is not active
      setActiveTag(index);
    }
  };

  return (
    <NavBar>
      {["Work", "Short Break", "Long Break"].map((tag, i) => (
        <Tag
          onClick={() => handleTagClick(i)}
          activeTag={activeTag === i}
          disabled={isActive} // Pass disabled prop based on isActive
          key={i}
        >
          {tag}
        </Tag>
      ))}
    </NavBar>
  );
};

export default Tags;

const NavBar = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  height: 5rem;
  width: 40rem;
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Tag = styled.button<TagProps>`
  all: unset;
  height: 4rem;
  text-align: center;
  border-radius: 5rem;
  flex: 1;
  font-size: 2rem;
  background: black;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")}; // Set cursor based on disabled state

  ${({ activeTag }) =>
    activeTag &&
    css`
      background: darkgreen;
    `}
`;
