// Links Social Media
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

// API Github Profile Infos
function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())   // 1 ação na arrow function, sem chaves | Transforma os dados com o método: .json
    .then(data => {
      userName.textContent = data.name.replace(' de Souza', '')
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

// Main
const linksSocialMedia = {
  github: 'rogeriofrsouza',
  youtube: 'channel/UC431N4ALlFhjgfk-u8nBBdg',
  facebook: 'rogeriofrsouza',
  instagram: 'rogeriofrsouza',
  twitter: 'rogeriofrsouza'
}

changeSocialMediaLinks()
getGithubProfileInfos()
