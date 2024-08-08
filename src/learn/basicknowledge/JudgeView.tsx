import './Learn.css'

/**
 * 条件渲染 1 
 * React 没有特殊的语法来编写条件语句，因此你使用的就是普通的 JavaScript 代码。例如使用 if 语句根据条件引入 JSX：
 * @param needView 
 * @returns 
 */
function judgeView1(needView: boolean) {
    let content;
    if (needView) {
        content = <span>条件渲染1 needView: true</span>
    } else {
        content = <span>条件渲染1 needView: false</span>
    }
    return (
        <div>
            {content}
        </div>
    );
}

/**
 * 条件渲染 2
 * 如果你喜欢更为紧凑的代码，可以使用 条件 ? 运算符。与 if 不同的是，它工作于 JSX 内部：
 * @param needView 
 * @returns 
 */
function judgeView2(needView: boolean) {
    return (
        <div>
            {needView
                ? (<span>条件渲染2 needView: true</span>)
                : (<span>条件渲染2 needView: false</span>)
            }
        </div>
    );
}

/**
 * 条件渲染 3
 * 不需要 else 分支时，你也可以使用更简短的 逻辑 && 语法
 * @param needView 
 * @returns 
 */
function judgeView3(needView: boolean) {
    return (
        <div>
            {needView && <span>条件渲染3 needView: true</span>}
        </div>
    );
}

function JudgeView() {
    return (
        <div className='Learn-root-div'>
            <h1 className='Learn-title'>条件渲染</h1>
            {judgeView1(true)}
            {judgeView2(false)}
            {judgeView3(true)}
        </div>
    );
}

export default JudgeView;