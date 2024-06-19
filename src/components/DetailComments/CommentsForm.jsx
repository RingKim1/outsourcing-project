import { useState } from 'react';
import styled from 'styled-components';

const CommentsForm = ({ addCommentMutation }) => {
  const [userComment, setUserComment] = useState({
    nickname: '',
    password: '',
    content: '',
    rating: ''
  });

  const handleChangeInput = (e) => {
    setUserComment({
      ...userComment,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nickname, password, rating, content } = userComment;

    if (nickname === '') {
      return alert('닉네임을 입력해주세요!');
    }
    if (password === '') {
      return alert('패스워드를 입력해주세요!');
    }
    if (rating === '') {
      return alert('평점을 남겨주세요!');
    }
    if (content === '') {
      return alert('댓글을 입력해주세요!');
    }
    const newComment = {
      nickname: userComment.nickname,
      password: userComment.password,
      rating: userComment.rating,
      content: userComment.content
    };

    await addCommentMutation(newComment);

    setUserComment({
      ...userComment,
      nickname: '',
      password: '',
      rating: '',
      content: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nickname">닉네임 : </label>
        <input id="nickname" type="text" name="nickname" value={userComment.nickname} onChange={handleChangeInput} />
        <label htmlFor="password">비밀번호 : </label>
        <input
          id="password"
          type="password"
          name="password"
          value={userComment.password}
          onChange={handleChangeInput}
        />
        <label htmlFor="rating">평점 : </label>
        <select id="rating" name="rating" value={userComment.rating} onChange={handleChangeInput}>
          <option value="">평점 선택</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <br />
      <StyledComentBox>
        <StyledTextarea id="content" name="content" value={userComment.content} onChange={handleChangeInput} />
        <button type="submit">등록</button>
      </StyledComentBox>
      <hr />
    </form>
  );
};

const StyledComentBox = styled.div`
  display: flex;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
`;

export default CommentsForm;