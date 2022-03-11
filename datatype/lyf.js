var data = [
    {
        id: 1,
        label: '菜单1',
        value: 1,
        pid: 0,
        children: [
            {
                id: 2,
                label: '菜单2-1',
                value: 2,
                pid: 1,
            }
        ]
    }
]

function treeRender(arr) {
    if (!arr.length) {
        return null
    }

    const subRender = (arr) => {
        let res = []
        for (let i = 0; i < arr.length; i++) {
            let temp = (
                <div>
                    {
                        arr[i].children && subRender(arr[i].children)
                    }
                </div>
            )
            res.push(temp)
        }
        return res;
    }
    return (
        <div>
            <Menu {...subRender()}></Menu>
        </div>
    )
}
function SubMenu(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

function MenuItem(props) {
    return (
        <div>{props.label}</div>
    )
}

function Menu(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}