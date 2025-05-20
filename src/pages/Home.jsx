import { useEffect, useState } from 'react';
import { useCrud } from '../hooks/useCrud';
import UserContent from '../components/UserContent';
import Form from '../components/Form';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import ThemeToggle from '../components/ThemeToggle';
import Loading from '../components/Loading';
import { useModal } from '../hooks/useModal';
import { usePagination } from '../hooks/usePagination';
import './Home.css';

const baseUrl =
	'https://users-crud-api-production-9c59.up.railway.app/api/v1/users';

function Home() {
	const [users, loading, error, { getAll, create, update, remove }] =
		useCrud(baseUrl);
	const { isOpen, openModal, closeModal, modalContent, setModalContent } =
		useModal();
	const [selectedUser, setSelectedUser] = useState(null);

	const { page, totalPages, items, prev, next, goToPage } = usePagination(
		users,
		6,
	);

	useEffect(() => {
		getAll();
	}, []);

	const handleCreate = (dataForm) => {
		create({ ...dataForm, isNew: true });
		closeModal();
	};

	const handleAdd = () => {
		openModal();
		setModalContent(<Form onSubmit={handleCreate} />);
	};

	const handleDelete = (user) => {
		const confirmDelete = window.confirm(
			`¿Eliminar a ${user.first_name} ${user.last_name}?`,
		);
		if (confirmDelete) {
			remove(user.id);
		}
	};

	const handleCancel = () => {
		setSelectedUser(null);
		closeModal();
	};

	const handleUpdate = (dataForm) => {
		update(dataForm.id, dataForm);
		setSelectedUser(null);
		closeModal();
	};

	const handleEdit = (user) => {
		setSelectedUser(user);
		openModal();
		setModalContent(
			<Form onSubmit={handleUpdate} onCancel={handleCancel} user={user} />,
		);
	};

	return (
		<div className="App">
			{loading && <Loading />}

			<div className="header">
				<h1 className="title">My CRUD </h1>
				<button onClick={handleAdd} className="btn btn-primary">
					Add User
				</button>
			</div>

			{error && <p className="errors">{error}</p>}

			<UserContent users={items} onEdit={handleEdit} onDelete={handleDelete} />

			<Pagination
				page={page}
				totalPages={totalPages}
				prev={prev}
				next={next}
				goToPage={goToPage}
			/>

			<Modal
				openModal={isOpen}
				closeModal={closeModal}
				animationType={selectedUser ? 'edit' : 'create'}
			>
				{modalContent}
			</Modal>
		</div>
	);
}

export default Home;
