function customrender(reactElement, container) {
    const domelement = document.createElement
        (reactElement.type);
    domelement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children')
            continue;
        domelement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domelement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https.//google.com',
        target: '_blank'

    },
    children: 'click me to visit site'

}
function customrender1(reactElement1, container) {
    const domelement = document.createElement
        (reactElement1.type);
    domelement.innerHTML = reactElement1.children
    // for (const prop in reactElement1.props) {
    //     if (prop === 'children')
    //         continue;
    //     domelement.setAttribute(prop, reactElement.props[prop])
    // }
    container.appendChild(domelement)
}
const reactElement1 = {
    type: 'p',
    children: 'Hello my self shivansh Goel~~~~'
}
const maincontainer = document.querySelector('#root')
customrender(reactElement, maincontainer)
customrender1(reactElement1, maincontainer)