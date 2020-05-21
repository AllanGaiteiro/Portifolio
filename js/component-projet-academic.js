var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var info = [{ id: 'soloPlayer', title: 'Jogo Solo Player', detalhes: 'Um jogo criado em quanto aprendia orientaçao obeto. Uma prológo de um jogo meu homenageando o manhua coreano "Solo Leveling"', link: 'https://allangaiteiro.github.io/jogo-Solo-Player/' }, {
    id: 'forca', title: 'Forca', detalhes: 'Um jogo de forca comun. minha ideia é fazer a animaçao dele indo atá a forca em vez de montar ele.Porêm ainda esta sem animação',
    link: 'https://allangaiteiro.github.io/Jogo-da-Forca/'
}, {
    id: 'velha', title: 'Jogo da Velha', detalhes: 'Um jogo da velha comundo.Porem avera uma barra de nivel de jogo.',
    link: 'https://allangaiteiro.github.io/Jogo-da-Velha/'
}];
//alert(info[1].title)
//alert(info.length)

var Github = function (_React$Component) {
    _inherits(Github, _React$Component);

    function Github() {
        _classCallCheck(this, Github);

        return _possibleConstructorReturn(this, (Github.__proto__ || Object.getPrototypeOf(Github)).apply(this, arguments));
    }

    _createClass(Github, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'section',
                { id: 'gitHub' },
                React.createElement(
                    'a',
                    { className: 'aProjet', href: 'https://github.com/AllanGaiteiro', target: '-blank' },
                    React.createElement(
                        'h2',
                        { className: 'name' },
                        'Meu GitHub'
                    )
                )
            );
        }
    }]);

    return Github;
}(React.Component);

function Projet(props) {
    return React.createElement(
        'section',
        { id: props.id },
        React.createElement(
            'a',
            { className: 'aProjet', href: props.link, target: '-blank' },
            React.createElement(
                'h2',
                { className: 'name' },
                props.title
            ),
            React.createElement(
                'h3',
                { className: 'descr' },
                'Descri\xE7\xE3o:',
                React.createElement(
                    'p',
                    null,
                    props.detalhes
                )
            )
        )
    );
}

var ProjetosAcademic = function (_React$Component2) {
    _inherits(ProjetosAcademic, _React$Component2);

    function ProjetosAcademic() {
        _classCallCheck(this, ProjetosAcademic);

        return _possibleConstructorReturn(this, (ProjetosAcademic.__proto__ || Object.getPrototypeOf(ProjetosAcademic)).apply(this, arguments));
    }

    _createClass(ProjetosAcademic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Projet, { id: info[0].id, title: info[0].title, detalhes: info[0].detalhes, link: info[0].link }),
                React.createElement(Projet, { id: info[1].id, title: info[1].title, detalhes: info[1].detalhes, link: info[1].link }),
                React.createElement(Projet, { id: info[2].id, title: info[2].title, detalhes: info[2].detalhes, link: info[2].link })
            );
        }
    }]);

    return ProjetosAcademic;
}(React.Component);

var Feitos = function (_React$Component3) {
    _inherits(Feitos, _React$Component3);

    function Feitos() {
        _classCallCheck(this, Feitos);

        return _possibleConstructorReturn(this, (Feitos.__proto__ || Object.getPrototypeOf(Feitos)).apply(this, arguments));
    }

    _createClass(Feitos, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(ProjetosAcademic, null),
                React.createElement(Github, null)
            );
        }
    }]);

    return Feitos;
}(React.Component);

ReactDOM.render(React.createElement(Feitos, null), document.getElementById('component-projet-academic'));