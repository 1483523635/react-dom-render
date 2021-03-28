function render(vNode, container) {
    const node = crateNode(vNode);
    container.appendChild(node);
}

function updateNode(node, nextVal) {
    Object.keys(nextVal)
        .filter(k => k !== 'children')
        .forEach(key => node[key] = nextVal[key]);
}

function updateHostComponent(vNode) {
    const { type } = vNode;
    let node = document.createElement(type);
    updateNode(node, vNode.props);
    return node;
}

function updateTextComponent(vNode) {
    return document.createTextNode(vNode);
}

function reconcileChildren(node, children) {
    if(children === void 0) {
        return;
    }
    const newChildren = Array.isArray(children) ? children : [children];
    for (let newChild of newChildren) {
        render(newChild, node);
    }
}

function crateNode(vNode) {
    let node;
    console.log(vNode);
    const { type, props={} } = vNode;
    if (typeof type === 'string') {
        node = updateHostComponent(vNode);
    } else {
        node = updateTextComponent(vNode);
    }

    reconcileChildren(node, props.children);
    return node;
}


export default { render }

