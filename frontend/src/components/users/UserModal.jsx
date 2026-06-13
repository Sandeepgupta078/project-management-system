import Modal from "../common/Modal";
import UserForm from "./UserForm";

const UserModal = ({ isOpen, title, user, loading, onClose, onSubmit }) => {
  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      <UserForm defaultValues={user} loading={loading} onSubmit={onSubmit} />
    </Modal>
  );
};

export default UserModal;
