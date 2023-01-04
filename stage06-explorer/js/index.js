const routes = {
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/contact": "/pages/contact.html",
  404: "/pages/404.html",
}

function route(event) {
  event = event || window.event //verifica se passou o 'event' ou se não passou o evento, pega o evento que está na 'window'
  event.preventDefault() //não faça o padrão (o padrão é redirecionar para a page que está sendo passada)

  window.history.pushState({}, "", event.target.href) //coloque no histórico que estou mudando de página

  handle()
}

function handle(){
  //const pathname = window.location.pathname >>desestruturando o location>>
  const { pathname } = window.location //ir para dentro do location > encontrar o pathname > colocar fora como uma constante
  const route = routes[pathname] || routes[404] //se não encontrar a rota que está no 'pathname' direcionar para a página de error

  fetch(route) //o fetch sempre retorna uma promessa //vai buscar
    .then(data => data.text()) //then: "quando eu concluir" //retorna os dados em texto 
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })

  console.log(route)
}

handle()

window.onpopstate = () => handle(); //para mudar o conteúro sempre que as setas de navegação forem usadas
window.route = () => route()