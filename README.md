### 说明
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

### PropTypes 类型检查
    注意: React.PropTypes 自 React v15.5 起已弃用。请使用 prop-types 库代替。
#### 写法1
    import PropTypes from 'prop-types';
    class Greeting extends React.Component {
        render() {
            return ( <h1>Hello, {this.props.name}</h1> );
        }
    }
    Greeting.propTypes = {
        name: PropTypes.string
    };
#### 写法2
    class Greeting extends React.Component {
        static propTypes = {};
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
#### 其他使用方式
    使用 PropTypes.element 你可以指定只传递一个子代
        MyComponent.propTypes = {
            children: PropTypes.element.isRequired
        };
    
    为属性指定默认值:
        Greeting.defaultProps = {
            name: 'Stranger'
        };

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



### 其他小总结
    关于ReactJS今天就先学习到这里了，下面来总结一下，主要有以下几点：
    1、ReactJs是基于组件化的开发，所以最终你的页面应该是由若干个小组件组成的大组件。
    2、可以通过属性props，将值传递到组件内部，同理也可以通过属性将内部的结果传递到父级组件；要对某些值的变化做DOM操作的，要把这些值放到state中。
    3、为组件添加外部css样式时，类名应该写成className而不是class;添加内部样式时，应该是style={{opacity: this.state.opacity}}而不是style="opacity:{this.state.opacity};"。
    4、组件名称首字母必须大写。
    5、变量名用{}包裹，且不能加双引号。
    6、react并不依赖jQuery，当然我们可以使用jQuery，但是render里面第二个参数必须使用JavaScript原生的getElementByID方法，不能使用jQuery来选取DOM节点。