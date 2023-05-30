import '../styles/Categories.css'

/* props passés au composant */
function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select
				value={activeCategory}
				/* appelle setActeCategory à chaque changement*/
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				{/* affiche les catégories */}
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			{/* reset appele setActiveCategory avec une chaine vide */}
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories
