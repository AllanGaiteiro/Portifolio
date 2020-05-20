
function ListMenu(props) {
    return (
        <li className={props.className}>
            <a href={'#' + props.className}>
                {props.className}
            </a>
        </li>
    )
}
class UlMenu extends React.Component {

    render() {
        return (
            <ul>
                <ListMenu className='sobre' />
                <ListMenu className='feitos' />
                <ListMenu className='contate' />
            </ul>
        )
    }
}
class Logo extends React.Component {
    render() {
        return (
            <h1 className='logoName'>Allan Gaiteiro
                <p>"O conhecimento é a única coisa que ninguém pode tirar de você."</p>
            </h1>

        )
    }
}
class Menu extends React.Component {

    render() {
        return (
            <div>
                <Logo />
                <UlMenu />
            </div>

        )
    }
}

ReactDOM.render(<Menu />, document.getElementById('menu-react'))
