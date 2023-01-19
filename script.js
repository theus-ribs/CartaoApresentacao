const LinksSocialMedia = {
    github: 'theus-ribs',
    youtube: '@theus-ribs',
    instagram: 'theus.ribs',
    twitter: 'matheuribes',
    linkedin: 'in/matheus-ribeiro-b83bb6196',
}

function changeLinks(){
    for (let li of socialLinks.children){ //cada vez que roda voltará um filho do 'socialLinks' sendo inserido na li
        const social = li.getAttribute('class') //volta o nome do atributo que está na class da li
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` //está pegando o primeiro filho da li e substituindo pelos links corretos
    }
}

changeLinks()

function getGitHubProfileInfos(){ //função para pegar informações do meu perfil direto da api do github
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url) //puxa o que a url retorna e armazena
    .then(//se funcionar corretamente o then puxa e armazena a infomação
        response => //ARROW FUNCTIONS = forma diferente de criar uma função contraida, mas não sendo possivel chama-la posteriormente. Quando a arrow funciton tiver apenas uma coisa a ser feita não é necessario usar chaves {}. Ela pode ser feita na mesma linha também
            response.json() //indica que a informação puxada pelo fetch é um arquivo json
    ).then(//está puxando o resultado do then anterior, mas agora identificado com formato json
        data => {
            //document.getElementById('name').innerHTML = `${data.name}`
            userName.innerHTML = data.name
            userLinkGithub.href = `https://github.com/${data.login}`
            userLogin.innerHTML = `@${data.login}`
            userBio.innerHTML = `${data.bio}`
            userImg.src = `${data.avatar_url}`
            userImg.alt = `Foto de ${data.name}`
        })
}
getGitHubProfileInfos()