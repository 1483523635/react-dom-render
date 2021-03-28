function appendChildren(children, container) {
    if (children === void 0) {
        return;
    }
    const newChild = Array.isArray(children) ? children : [children];
    for (let child of newChild) {
        render(child, container);
    }
}

function appendProps(vNode, container) {
    const { props } = vNode;
    if(props === void 0) {
        return;
    }
    Object.keys(props)
        .filter(k => k !== 'children')
        .forEach(key => container[key] = props[key])

}

function getFunctionComponent(vNode) {
    if(vNode.type.prototype.isReactComponent) {
        const jsx = new vNode.type(vNode.props).render();
        return createNode(jsx);
    }
    const jsx = vNode.type(vNode.props);
    return createNode(jsx);
}

function createNode(vNode) {
    let node;
    const { type, props = {} } = vNode;
    if (typeof type === 'string') {
        node = document.createElement(type);
    } else if (typeof type === 'function') {
        node = getFunctionComponent(vNode);
    } else {
        node = document.createTextNode(vNode);
    }
    appendProps(vNode, node);
    appendChildren(props.children, node)
    return node;
}

function render(vNode, container) {
    const node = createNode(vNode);
    container.appendChild(node);
}

export default { render }
