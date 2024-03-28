import styled, { css } from "styled-components";
import { useState } from "react";

interface TagProps {
  activeTag: boolean;
}

const Tags = () => {
  const [activeTag, setActiveTag] = useState(0);

  const handleTagClick = (index: number) => {
    setActiveTag(index);
  };
  return (
    <NavBar>
      {["Work", "Short Break", "Long Break"].map((tag, i) => (
        <Tag
          onClick={() => handleTagClick(i)}
          activeTag={activeTag == i}
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Tag = styled.button<TagProps>`
  all: unset;
  height: 4rem;
  text-align: center;
  border-radius: 5rem;
  flex: 1;
  font-size: 2rem;
  background: black;

  ${({ activeTag }) =>
    activeTag &&
    css`
      background: darkgreen;};
    `}
`;
