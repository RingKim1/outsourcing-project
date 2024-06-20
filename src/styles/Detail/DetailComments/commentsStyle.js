import styled from 'styled-components';

export const CommentsWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--darkgray-color);
  border-radius: 5px;
`;

export const CommentItems = styled.ul`
  display: block;
`;

export const NickItem = styled.ul`
  font-size: 15px;
  margin-left: 5px;
`;
export const RatingItem = styled.ul`
  font-size: 15px;
  margin-left: 5px;
`;

export const ContentItem = styled.ul`
  font-size: 15px;
  margin-left: 5px;
`;

export const BtnContainer = styled.div`
  text-align: center;
  margin-left: 480px;
`;

export const CommentButton = styled.button`
  margin: 1px 0 1px 0;
  display: block;
  text-align: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid black;
  background: var(--sub-color);
  color: black;
  padding: 5px 20px;
  font-size: 13px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: var(--main-color);
    transform: scale(1);
  }
`;

export const Star = styled.span`
  color: #ffcc00;
  font-size: 20px;
  margin-right: 2px;
`;
