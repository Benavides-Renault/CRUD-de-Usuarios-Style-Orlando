import './Modal.css';

function Modal({ openModal, closeModal, children, animationType = 'create' }) {
	return (
		<div
			className={`modal ${openModal ? 'show-modal' : ''}`}
			onClick={closeModal}
		>
			<div
				className={`modal-content ${
					animationType === 'edit' ? 'modal-edit' : 'modal-create'
				}`}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
}

export default Modal;
