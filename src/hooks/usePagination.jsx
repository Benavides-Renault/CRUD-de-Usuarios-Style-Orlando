import { useState } from 'react';

export function usePagination(array = [], itemsPerPage = 6) {
	const [page, setPage] = useState(1);
	const totalPages = Math.ceil(array.length / itemsPerPage);

	const prev = () => {
		if (page > 1) setPage(page - 1);
	};

	const next = () => {
		if (page < totalPages) setPage(page + 1);
	};

	const goToPage = (p) => {
		if (p >= 1 && p <= totalPages) setPage(p);
	};

	const items = array.slice((page - 1) * itemsPerPage, page * itemsPerPage);

	return { page, totalPages, items, prev, next, goToPage };
}
