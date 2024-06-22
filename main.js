let users = []; // Массив для хранения пользователей

// Функция для получения пользователей
async function getUsers(searchTerm) {
	const response = await fetch(`/api/users?searchTerm=${searchTerm}`);
	const data = await response.json();
	users = data.result;
	displayUsers();
}

// Функция для отображения пользователей
function displayUsers() {
	const usersContainer = document.getElementById('usersContainer');
	usersContainer.innerHTML = '';
	for (let user of users) {
		const userElement = document.createElement('div');
		const avatar = document.createElement('img');
		avatar.src = user.avatarUrl;
		const name = document.createElement('p');
		name.textContent = user.name;
		userElement.appendChild(avatar);
		userElement.appendChild(name);
		usersContainer.appendChild(userElement);
	}
}

// Обработчик события ввода для строки поиска
document.getElementById('searchInput').addEventListener('input', (event) => {
	getUsers(event.target.value);
});