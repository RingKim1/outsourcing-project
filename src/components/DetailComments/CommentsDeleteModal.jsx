import { useState } from 'react';
import { confirmDeleteComment } from '../../supabase/supabaseCommentsService';
import {
  ModalBoxContainer,
  ModalInputs,
  FixInputcontent,
  passwordInput,
  ModalBtnContainer,
  ModalButton
} from '../../styles/Detail/DetailComments/commentsModal';
const CommentsDeleteModal = ({ modalOpen, setModalOpen, id, deleteMutation }) => {
  const [deleteInput, setDeleteInput] = useState('');

  const handleDelete = async (targetId) => {
    if (!deleteInput) {
      alert('비밀번호를 입력해야 합니다.');
      return;
    }

    await confirmDeleteComment(targetId, deleteInput, deleteMutation);
    setDeleteInput('');
  };

  return (
    <>
      {modalOpen && (
        <ModalBoxWrapper>
          <ModalBoxContainer>
            <ModalInputs>
              <p>
                <passwordInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  value={deleteInput}
                  onChange={(e) => setDeleteInput(e.target.value)}
                />{' '}
              </p>
            </ModalInputs>
            <ModalBtnContainer>
              <ModalButton onClick={() => handleDelete(id)}>확인</ModalButton>
              <ModalButton onClick={() => setModalOpen(!modalOpen)}>닫기</ModalButton>
            </ModalBtnContainer>
          </ModalBoxContainer>
        </ModalBoxWrapper>
      )}
    </>
  );
};

export default CommentsDeleteModal;
