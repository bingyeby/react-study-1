### 基于
    https://github.com/jrainlau/react-es6

### webpack4 或者者其他loder的一些变化
    1. 需要装webpack-cli
    2. autoprefixer-loader -> postcss-loader
    3. 需要设置mode，webpack --mode 'production'
    4. OccurenceOrderPlugin不存在
        TypeError: webpack.optimize.OccurenceOrderPlugin is not a constructor
    5. UglifyJsPlugin消失
        webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead.
    6. loader的配置方式发生了变化
        Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
        - configuration.module has an unknown property 'loaders'. These properties are valid:


### 一个简易的webpack配置：
    -devDependencies
    babel-core babel-loader babel-preset-es2015 babel-preset-react 
    css-loader less less-loader style-loader url-loader 
    webpack webpack-cli webpack-dev-server

    -dependencies
    react react-dom react-intl

    -script 
    webpack-dev-server --inline --hot
    webpack --progress --profile --colors
    webpack -p --config webpack.dll.config.js --progress --profile --colors

### dll使用
    http://blog.csdn.net/lx376693576/article/details/77883603
    新建一个配置文件webpack.dll.config.js
    entry: {
        basic: ['react', 'react-dom', 'lodash', './src/common.js']
    },
    output: {
        path: path.resolve(__dirname, 'static'),// string
        filename: '[name].dll.js',//生成文件名字
        library: '[name]_library'// 生成文件中的一些映射关系，与下面DllPlugin中配置对应
    },
    plugins: [
        // 使用DllPlugin插件编译上面配置的npm包
        new webpack.DllPlugin({
            path: path.join(__dirname, 'static', '[name]-manifest.json'),// 生成名单，映射关系
            name: '[name]_library'// 与output中配置对应
        })
    ],

    在原来的webpack.dev.config.js
    plugins:[
        new webpack.DllReferencePlugin({// 建立映射关系，在编译的过程中通过json来把那些预编译的资源弄进来
        context:__dirname,
        manifest:require('./static/basic-manifest.json')//名单
        })
    ]

### 静态类型检查
    像 Flow 和 TypeScript 这样的静态类型检查器可以在运行代码之前识别某些类型的问题。 他们还可以通过添加自动完成功能来改善开发人员的工作流程。 出于这个原因，对于更大的代码库我们建议使用 Flow 或者 TypeScript 来替代 PropTypes。

    Flow 是一个针对 JavaScript 代码的静态类型检查器。它是在Facebook开发的，经常和React一起使用。 它可以让你使用特殊的类型语法来注释变量，函数和React组件，并尽早地发现错误。 您可以阅读 Flow 介绍 来了解基本知识。
    为了使用 Flow, 你需要：
    1. 将 Flow 添加到您的项目作为依赖项。
    2. 确保编译后的代码中去除了 Flow 语法。
    3. 添加了类型注释并运行 Flow 来检查它们。

### 非受控组件
    在受控组件中，表单数据由 React 组件处理。如果让表单数据由 DOM 处理时，替代方案为使用非受控组件。
    要编写一个非受控组件，而非为每个状态更新编写事件处理程序，你可以 使用 ref 从 DOM 获取表单值。

    在非受控组件中接收单个属性:
        handleSubmit(event) {
            alert('A name was submitted: ' + this.input.value);
            event.preventDefault();
        }
        render(){
            <input type="text" ref={(input) => this.input = input} />
        }
    
### key
    React支持了一个key属性。当子节点有key时，React使用key来匹配原本树的子节点和新树的子节点。

### Web Components
    React 和 web组件 被用以解决不同问题。Web组件为可重用组件提供了强大的封装能力，而React则是提供了保持DOM和数据同步的声明式库。二者目标互补。作为开发者，你可以随意地在Web组件里使用React，或者在React里使用Web组件，或都有。

    Web组件 使用 “class” 而非 “className”。


### 通过控制state实现一个动态组件
    class Cloak extends Component {
        constructor(props) {
            super(props);
            let time = new Date();
            this.state = { time };// 建立state
        }
        componentDidMount() {
            this.timer = setInterval(() => {
                this.setState({// 改变state
                    time: new Date()
                });
            }, 1000)
        }
        componentWillUnmount() {
            clearInterval(this.timer);
        }
        render() {
            return <div> {this.state.time.toString()} </div>;
        }
    };
    render(<Cloak />, document.getElementById("root"));

### 事件处理
    React事件绑定属性的命名采用驼峰式写法，而不是小写。
    如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)
        <button onClick={activateLasers}> Activate Lasers </button>
    在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为。你必须明确的使用 preventDefault。例如，传统的 HTML 中阻止链接默认打开一个新页面，你可以这样写：
        function ActionLink() {
            function handleClick(e) {
                e.preventDefault();
                console.log('The link was clicked.');
            }
            return ( <a href="#" onClick={handleClick}> Click me </a> );
        }


### 其他小总结
    关于ReactJS今天就先学习到这里了，下面来总结一下，主要有以下几点：
    1、ReactJs是基于组件化的开发，所以最终你的页面应该是由若干个小组件组成的大组件。
    2、可以通过属性props，将值传递到组件内部，同理也可以通过属性将内部的结果传递到父级组件；要对某些值的变化做DOM操作的，要把这些值放到state中。
    3、为组件添加外部css样式时，类名应该写成className而不是class;添加内部样式时，应该是style={{opacity: this.state.opacity}}而不是style="opacity:{this.state.opacity};"。
    4、组件名称首字母必须大写。
    5、变量名用{}包裹，且不能加双引号。
    6、react并不依赖jQuery，当然我们可以使用jQuery，但是render里面第二个参数必须使用JavaScript原生的getElementByID方法，不能使用jQuery来选取DOM节点。




## 组件基础
### 组件属性
    React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。
    下面，我们来编写第一个组件Greet，有一个name属性，然后输出hello + name的值，代码如下：

    class Hello extends Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <h1>Hello {this.props.name}</h1>;
        }
    };
    render(<Hello name="Jack" />, document.getElementById("root"));

    1、获取属性的值用的是this.props.属性名
    2、创建的组件名称首字母必须大写。
    3、添加组件属性，有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。　　
    4、组件的style属性的设置方式也值得注意，要写成style={{width: this.state.witdh}}

    上面代码中，变量 MyComponent就是一个组件类。模板插入 <MyComponent /> 时，会自动生成 MyComponent 的一个实例（下文的"组件"都指组件类的实例）。所有组件类都必须有自己的 render 方法，用于输出组件。
### HTML标签对比React 组件
    React 可以渲染 HTML 标签 (strings) 或 React 组件 (classes)；

    > 要渲染 HTML 标签，只需在 JSX 里使用小写字母开头的标签名。
    var myDivElement = <div className="foo" />;
    React.render(myDivElement, document.getElementById('example'));

    > 要渲染 React 组件，只需创建一个大写字母开头的本地变量。
    var MyComponent = React.createClass({/*...*/});
    var myElement = <MyComponent someProperty={true} />;
    React.render(myElement, document.getElementById('example'));

    React 的 JSX 里约定分别使用首字母大、小写来区分本地组件的类和 HTML 标签。

### 动态组件
    上面代码中定义的MyComponent组件包含属性，状态和事件，是一个简单的比较完整的组件。使用props通过父组件进行传递值，使用state定义组件自己的状态，组件支持的大部分的DOM操作事件。

#### > 关于属性props：
    class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。由于 JSX 就是 JavaScript，一些标识符像 class和 for不建议作为 XML 属性名。作为替代，React DOM 使用className和 htmlFor来做对应的属性。
    直接在标签上使用style属性时，要写成style={{}}是两个大括号，外层大括号是告知jsx这里是js语法，和真实DOM不同的是，属性值不能是字符串而必须为对象，需要注意的是属性名同样需要驼峰命名法。即margin-top要写成marginTop。

#### > this.props.children
    this.props.children 不要children作为把对象的属性名。因为this.props.children获取的该标签下的所有子标签。
    this.props.children 的值有三种可能：
    如果当前组件没有子节点，它就是 undefined ;
    如果有一个子节点，数据类型是 object ；
    如果有多个子节点，数据类型就是 array 。
    所以，处理 this.props.children 的时候要小心。
    官方建议使用React.Children.map来遍历子节点，而不用担心数据类型。


#### > 关于状态state：
    组件免不了要与用户互动，React 将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI。
    很多情况下，组件实例的外观及行为通过使用props变量进行定制就可以了。 这样的组件我们称之为无状态/stateless的组件，因为在任何时刻，组件 实例的表现都仅仅取决于外部传入的props属性，与 它自身之前的表现毫无关系，即，它本身没有任何记忆。
    让一个组件拥有记忆能力，意味着它不仅能对外界的刺激产生反应（通过props 传入的数据、或用户的交互事件），也能根据自身的状态对同样的刺激做出不同的反应。

    React的组件的确引入了状态机的概念，通过将组件划分为不同的状态，使组件具有 了一定的记忆能力：
        1.state - 组件的状态变量
            每个React组件实例都有一个state变量，用来保存组件的当前状态。可以在 任何时刻使用this.state读取当前状态。
        2.state初始化：constructor和getInitialState
        3.setState(currentState) - 设置组件当前状态
            尽管可以使用this.state来直接设置组件当前状态，但React要求我们使用 setState()方法来进行状态设置。这是因为，setState()方法会自动地重新渲染组件，而这通常是我们所期望的。
            参数currentState是一个JSON对象，不必包含状态变量的所有字段，setState()方法会 将这个参数值与当前状态this.sate进行合并，结果作为状态变量的新值。
            初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取。当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。

    注意点：
    > 如果往原生 HTML 元素里传入 HTML 规范里不存在的属性，React 不会显示它们。如果需要使用自定义属性，要加 data- 前缀。
    <div data-custom-attribute="foo" />

    > 组件类只能包含一个顶层标签，否则会报错。
    //var myDivElement =<h1>你好</h1><h1>hello</h1>;
    //上述写法是会报错的，要写成只有一个顶层标签：var myDivElement =<div><h1>你好</h1><h1>hello</h1></div>;

### props
    class Counter extends Component {
        constructor(props) {// 入参
            super(props);// 组件基类
            this.state = { count: this.props.initialCount };
            this.addOne = this.addOne.bind(this);
        }
        addOne() {
            this.setState({
            count: ~~this.state.count + 1
            });
        }
        render() {
            return <div className="d6" onClick={this.addOne}>{this.state.count}</div>;
        }
    };
    render(<Counter initialCount="0" />, document.getElementById("root"));

### this.props.children
    class NodeList extends Component {
      render() {
        return (<ol> {
          React.Children.map(this.props.children, function (child) {
            return <li>{child}</li>;
          })
        } </ol>);
      }
    };
    render(<NodeList>
      <span>Dream</span>
      <span>Future</span>
    </NodeList>, document.getElementById("root"));

### state的简单使用方式demo2
    import React, { Component } from 'react';
    export default class Component2 extends Component {
        constructor(props) {
            super(props)
            this.state = { clickNum: 0 };
            this.clickHandler = this.clickHandler.bind(this);
        }
        clickHandler() {
            this.setState({
                clickNum: this.state.clickNum + 1
            });
        }
        render() {
            return (<div>
                <h1 onClick={this.clickHandler}>Hello {this.props.name}!</h1>
                <h2 style={{ color: 'blue' }}>点击{this.props.name}次数：{this.state.clickNum}</h2>
            </div>);
        }
    }

### state的简单使用方式demo2.1
    var MyComponent = React.createClass({
        getInitialState: function () {
            return {clickNum: 0};
        },
        clickHandler: function () {
            this.setState({
                clickNum: this.state.clickNum + 1
            });
        },
        render: function () {
            return (
                <div>
                    <h1 onClick={this.clickHandler}>Hello {this.props.name}!</h1>

                    <h2 style={{
                        color: 'blue'
                    }}>点击{this.props.name}次数：{this.state.clickNum}</h2>
                </div>
            );
        }
    });

### state初始化 ES5 | ES6
    1.ES6语法
    使用class声明一个类，且要继承react组件的方法和属性的时候 :
    在里面我们可以直接指定 this.state = { }， 我们可以当前组件内任何地方使用 this.setState()来改变组件状态;
    注意： 将类的方法绑定到当前对象，避免在方法内部this指针被覆盖
    class PCHeader extends React.Component {
        constructor() {
            super();
            this.state = {
                userNickName: '用户',
                userId: 0
            };
            this.handleClick = this.handleClick.bind(this);
        }
    }

    2.Es5 语法
    如果使用createClass方法创建一个Component组件，可以自动调用它的getInitialState方法来获取初始化的State对象，但是在ES6的Class中并不会如此自动调用，因此，要稍作  修改。
    getInitialState,这个函数在组件初始化的时候执行，必需返回NULL或者一个对象。
    var PCHeader = React.creatClass({
        getInitialState() {
            return {
                userNickName: '用户',
                userId: 0
            };
        }
    })

### props默认值defaultProps
#### ES5:
    可以通过 getDefaultProps() 方法为 props 设置默认值，实例如下：
    var HelloMessage = React.createClass({
        getDefaultProps: function () {//设置默认属性值
            return { name: 'default value' };
        },
        render: function () {
            //使用this.props.value访问属性，如果用户没有设置，则该值为默认值
            return <h1>{this.props.name}</h1>;
        }
    });

    React.render(<div><HelloMessage name="user value"/>|<HelloMessage/></div>, document.getElementById('example') );

#### ES6:
    class Counter extends Component {
        static defaultProps = {
            initialCount: "222"
        }
    为属性指定默认值:
    Greeting.defaultProps = {
        name: 'Stranger'
    };


### PropTypes 类型检查
    注意: React.PropTypes 自 React v15.5 起已弃用。请使用 prop-types 库代替。
#### 写法1
    import PropTypes from 'prop-types';
    class Greeting extends React.Component {
        render() { return ( <h1>Hello, {this.props.name}</h1> ); }
    }
    Greeting.propTypes = { name: PropTypes.string };
#### 写法2
    class Greeting extends React.Component {
        static propTypes = { name: PropTypes.string };
    }
    // ES6 明确规定，Class 内部只有静态方法，没有静态属性。
    // 提案：类的实例属性可以用等式，写入类的定义之中。 类的静态属性只要在上面的实例属性写法前面，加上static关键字就可以了。 
    // 使用像 transform-class-properties 的 Babel 转换器。
#### 常见的验证器
    JS 原生类型：array,bool,func,number,object,string,symbol,
    被渲染的元素：node
    React 元素：element
    某个特定值之一: PropTypes.oneOf(['News', 'Photos']),
    列举类型之一的对象: PropTypes.oneOfType([PropTypes.string])
    指定元素类型的数组 一个指定类型的对象 一个指定属性及其类型的对象
    PropTypes.func.isRequired
    PropTypes.any.isRequired
    自定义：不匹配时返回Error对象
    使用 PropTypes.element 你可以指定只传递一个子代
        MyComponent.propTypes = {
            children: PropTypes.element.isRequired
        };

### state props区别
    由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。
    state 和 props 主要的区别在于 props 是不可变的 只读的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。
    由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。

### 组合使用 state 和 props	
    我们可以在父组件中设置 state， 并通过在子组件上使用 props 将其传递到子组件上。 在 render 函数中, 设置 name 来获取父组件传递过来的数据。
    class Testson extends Component {
      constructor(props) {
        console.log('props', props);// {name:"111"}
        super(props);
      }
      render() {
        return <div> {this.props.name} </div>;
      }
    };

    class Test extends Component {
      constructor(p) {
        super(p);
        this.state = { a: "1111" };
      }
      render() {
        return <div>
          <Testson name={this.state.a} />
        </div>;
      }
    };
    render(<Test />, document.getElementById("root"));

### Props 是只读的	
    无论你用函数或类的方法来声明组件, 它都无法修改其自身 props. 思考下列 sum (求和)函数:
    function sum(a, b) {
        return a + b;
    }
    这种函数称为 “纯函数” ，因为它们不会试图改变它们的输入，并且对于同样的输入,始终可以得到相同的结果。
    反之， 以下是非纯函数， 因为它改变了自身的输入值：
    function withdraw(account, amount) {
        account.total -= amount;
    }
    虽然 React 很灵活，但是它有一条严格的规则：所有 React 组件都必须是纯函数，并禁止修改其自身 props 。
    可以通过state来实现动态组件，允许 React 组件在不违反上述规则的情况下, 根据用户操作, 网络响应, 或者其他随便什么东西, 来动态地改变其输出。


### ref
    组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM(virtual DOM)。只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。
    组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。

    但是，有时需要从组件获取真实 DOM 的节点，这时就要用到ref属性。
    class MyComponent extends Component {
      constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
      }
      clickHandler() {
        this.refs.myTextInput.focus();
      }
      render() {
        return <div>
          <input type="text" ref="myTextInput" />
          <input type="button" value="Focus the text input" onClick={this.clickHandler} />
        </div>;
      }
    };
    render(<MyComponent />, document.getElementById("root"));

    为了获取真是DOM节点，html元素必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。
    需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。
    上面代码中，通过为组件指定 Click 事件的回调函数，确保了只有等到真实 DOM 发生 Click事件之后，才会读取 this.refs.[refName] 属性。 
    React 组件支持很多事件，除了 Click 事件以外，还有 KeyDown 、Copy、Scroll 等。


### 直接访问React元素对应的DOM对象
    在React中，有时需要直接访问React元素对应的DOM对象，比如读取用户的输入，这需要两个步骤：
    > 设置React元素的ref属性
    如果需要在代码中访问某个React元素的DOM对象，那么首先需要设置这个React 元素的ref属性。
    比如，我们需要读取文本输入框的值，那么首先给这个input元素指定ref属性：
    //JSX
    <input type="text" defaultValue="beijing" ref="q" placeholder="请输入城市拼音，如：beijing"/>
    声明了React元素的ref属性之后，可以通过this.refs对象访问 这个组件，比如上面的示例中：this.refs.q指向input组件对象，你应该已经注意到， 我们为React元素设置的ref属性值，在这里被用为this.refs对象的键值。

    > 获得DOM对象
    在设置了React元素的ref属性后，可以使用React.findDOMNode()方法获得对应的 DOM对象： React.findDOMNode(component)
    参数component是一个React组件对象，如前所述，我们可以通过this.refs对象获得。 
    如果React元素已经渲染到DOM树上，findDOMNode()方法将返回组件对象对应的DOM节 点对象，后续就可以使用标准的DOM API操作这个DOM对象了。
