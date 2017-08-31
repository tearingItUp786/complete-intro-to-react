const MyFirstComponent = function() {
  return React.createElement('div', null, React.createElement('h1', null, 'my first component'))
}

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
