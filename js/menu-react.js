var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ListMenu(props) {
    return React.createElement(
        'li',
        { className: props.className },
        React.createElement(
            'a',
            { href: '#' + props.className },
            props.className
        )
    );
}

var UlMenu = function (_React$Component) {
    _inherits(UlMenu, _React$Component);

    function UlMenu() {
        _classCallCheck(this, UlMenu);

        return _possibleConstructorReturn(this, (UlMenu.__proto__ || Object.getPrototypeOf(UlMenu)).apply(this, arguments));
    }

    _createClass(UlMenu, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'ul',
                null,
                React.createElement(ListMenu, { className: 'sobre' }),
                React.createElement(ListMenu, { className: 'feitos' }),
                React.createElement(ListMenu, { className: 'contate' })
            );
        }
    }]);

    return UlMenu;
}(React.Component);

var Logo = function (_React$Component2) {
    _inherits(Logo, _React$Component2);

    function Logo() {
        _classCallCheck(this, Logo);

        return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
    }

    _createClass(Logo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'h1',
                { className: 'logoName' },
                'Allan Gaiteiro',
                React.createElement(
                    'p',
                    null,
                    '"O conhecimento \xE9 a \xFAnica coisa que ningu\xE9m pode tirar de voc\xEA."'
                )
            );
        }
    }]);

    return Logo;
}(React.Component);

var Menu = function (_React$Component3) {
    _inherits(Menu, _React$Component3);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Logo, null),
                React.createElement(UlMenu, null)
            );
        }
    }]);

    return Menu;
}(React.Component);

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu-react'));