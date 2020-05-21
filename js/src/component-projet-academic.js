

const info = [
    { id: 'soloPlayer', title: 'Jogo Solo Player', detalhes: 'Um jogo criado em quanto aprendia orientaçao obeto. Uma prológo de um jogo meu homenageando o manhua coreano "Solo Leveling"', link: 'https://allangaiteiro.github.io/jogo-Solo-Player/' },

    {
        id: 'forca', title: 'Forca', detalhes: 'Um jogo de forca comun. minha ideia é fazer a animaçao dele indo atá a forca em vez de montar ele.Porêm ainda esta sem animação',
        link: 'https://allangaiteiro.github.io/Jogo-da-Forca/'
    },

    {
        id: 'velha', title: 'Jogo da Velha', detalhes: 'Um jogo da velha comundo.Porem avera uma barra de nivel de jogo.',
        link: 'https://allangaiteiro.github.io/Jogo-da-Velha/'
    }
]
//alert(info[1].title)
//alert(info.length)

class Github extends React.Component {
    render() {
        return (
            <section id="gitHub">
                <a className='aProjet' href="https://github.com/AllanGaiteiro" target="-blank" >
                    <h2 className="name">Meu GitHub</h2>
                </a>
            </section>
        )
    }
}


function Projet(props) {
    return (
        <section id={props.id}>
            <a className='aProjet' href={props.link} target="-blank">
                <h2 className='name'>{props.title}</h2>
                <h3 className='descr'>Descrição:
                    <p>{props.detalhes}</p>
                </h3>
            </a>
        </section>
    )
}




class ProjetosAcademic extends React.Component {
    render() {
        return (
            <div>
                <Projet id={info[0].id} title={info[0].title} detalhes={info[0].detalhes} link={info[0].link} />
                <Projet id={info[1].id} title={info[1].title} detalhes={info[1].detalhes} link={info[1].link} />
                <Projet id={info[2].id} title={info[2].title} detalhes={info[2].detalhes} link={info[2].link} />
            </div>

        )
    }
}

class Feitos extends React.Component {
    render() {
        return (
            <div>
                <ProjetosAcademic />
                <Github />
            </div>

        )
    }
}


ReactDOM.render(
    <Feitos />, document.getElementById('component-projet-academic')
)