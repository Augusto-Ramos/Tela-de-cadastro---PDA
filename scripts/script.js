let animeInformation = [];

function displayInfo() {
  const displayArea = document.getElementById('displayArea');
  displayArea.innerHTML = '';
  animeInformation.forEach((anime, index) => {
    displayArea.innerHTML += `
      Nome do Anime: ${anime.animeName}<br />
      Personagem Favorito: ${anime.favoriteCharacter}<br />
      <button onclick="editInfo(${index})">Editar</button>
      <button onclick="removeInfo(${index})">Excluir</button>
      <button onclick="saveInfo(${index})">Salvar</button><br /><br />
    `;
  });

  document.getElementById('editButton').style.display = 'none';
  document.getElementById('deleteButton').style.display = 'none';
}

function editInfo(index) {
  const animeName = document.getElementById('animeName');
  const favoriteCharacter = document.getElementById('favoriteCharacter');

  animeName.value = animeInformation[index].animeName;
  favoriteCharacter.value = animeInformation[index].favoriteCharacter;

  animeName.removeAttribute('readonly');
  favoriteCharacter.removeAttribute('readonly');
}

function saveInfo(index) {
  const animeName = document.getElementById('animeName').value;
  const favoriteCharacter = document.getElementById('favoriteCharacter').value;

  animeInformation[index].animeName = animeName;
  animeInformation[index].favoriteCharacter = favoriteCharacter;

  document.getElementById('animeName').value = '';
  document.getElementById('favoriteCharacter').value = '';
  document.getElementById('animeName').removeAttribute('readonly');
  document.getElementById('favoriteCharacter').removeAttribute('readonly');

  displayInfo();
  alert('Cadastro editado com sucesso!');
}

function removeInfo(index) {
  animeInformation.splice(index, 1);
  displayInfo();
  alert('Cadastro excluído com sucesso!');
}

document
  .getElementById('animeForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const animeName = document.getElementById('animeName').value;
    const favoriteCharacter =
      document.getElementById('favoriteCharacter').value;

    animeInformation.push({ animeName, favoriteCharacter });

    displayInfo();
    alert('Cadastro adicionado com sucesso!');

    // Clear the form
    document.getElementById('animeForm').reset();

    // Move the focus back to the anime name input
    document.getElementById('animeName').focus();
  });
