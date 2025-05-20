import './Pagination.css';

function Pagination({ page, totalPages, prev, next, goToPage }) {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="pagination-container">
			<button onClick={prev} disabled={page === 1}>
				&laquo;
			</button>

			{pages.map((p) => (
				<button
					key={p}
					onClick={() => goToPage(p)}
					className={p === page ? 'active' : ''}
				>
					{p}
				</button>
			))}

			<button onClick={next} disabled={page === totalPages}>
				&raquo;
			</button>
		</div>
	);
}

export default Pagination;
