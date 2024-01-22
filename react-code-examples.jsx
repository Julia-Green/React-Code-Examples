// JSX Example
    function MyComponent() { 
        return (
            <nav id="main-nav" className="navigation">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/archives">Archives</a>
                    </li>
                </ul>
            </nav>
        );
    }



// What JSX Compiles To
    const element = React.createElement(
        "nav",
        { id: "main-nav", className: "navigation"},

        React.createElement(
            "ul",
            null,

            React.createElement(
                "li",
                null,

                React.createElement(
                "a",
                { href: "/" },
                "Home"
                )
            ),

            React.createElement(
                "li",
                null,

                React.createElement(
                "a",
                { href: "/archives" },
                "Archives"
                )
            )
        )
    );



// Basic Components
    // Class-Based
        class Person extends Component {
            render() {
            return <h2>Hello world!</h2>;
            }
        }


    // Functional
        function Person() {
            return <h2>Hello world!</h2>;
        }



// Rendering Components 
    // Class-Based
        class Person extends Component {
            render() {
                return <h2>Hello, world!</h2>;
            }
        }

        // How to render
        <Person />
        

    // Functional
        function Person() {
            return <h2>Hello, world!</h2>;
        }

        // How to render
        <Person />



// Passing Props to Child Components
    // Class-Based
        class Person extends Component {
            render() {
                return <Daniel name={"Daniel."} />;
            } 
        }

        class Daniel extends Person {
            render() {
                return <h2>Hello, {this.props.name}</h2>;
            }
        }


    // Functional
        function Person() {
            return <Daniel name={"Daniel."} />;
        }

        function Daniel() {
            return <h2>Hello, {props.name}</h2>;
        }



// Setting & Updating State
    // Class-Based
        class Person extends Component {
            constructor() {
                super();
                // Sets a default value
                this.state = {
                    name: "Daniel",
                };
            }

            render() {
                return (
                    <div>
                        <h2>Hello, {this.state.name}.</h2>;
                        <button onClick={
                            this.setSate({name: 'Cooler Daniel'})
                        }>
                            Click me!
                        </button>
                    </div>
                ); 
            } 
        }


    // Functional
        function Person() {
            // Sets a default value
            const [name, setName] = useState("Daniel"); 

            return (
                <div>
                    <h2>Hello, {state.name}.</h2>;
                    <button onClick={
                        setName("Cooler Daniel")
                    }>
                        Click me!
                    </button>
                </div>
            ); 
        }



// Lifecycle Methods
    class Person extends Component { 
        componentDidMount() {
            console.log("I'm here!");
        }
    
        componentDidUpdate() {
            console.log("Updated!");
        }
    
        componentWillUnmount() {
            console.log("Okay, byeee!");
        }
    
        render() {
            return <h2>Hello world!</h2>;
        }
    }



// React Hooks
    // useState
        import { useState } from 'react';

        function Person() {
            // Sets a default value
            const [name, setName] = useState("Daniel"); 

            return (
                <div>
                    <h2>Hello, {state.name}.</h2>;
                    <button onClick={
                        setName("Cooler Daniel")
                    }>
                        Click me!
                    </button>
                </div>
            ); 
        }


    // useEffect
        // Empty dependencies array
            import { useEffect } from 'react';

            function Person() {
                useEffect(() => {
                    console.log("I'm an effect!");
                }, []);

                return (
                    <div>
                        <h2>Hello, world!</h2>;
                    </div>
                ); 
            }


        // No dependencies provided
            import { useEffect } from 'react';

            function Person() {
                useEffect(() => {
                    console.log("I'm an effect!");
                });

                return (
                    <div>
                        <h2>Hello, world!</h2>;
                    </div>
                ); 
            }


    // useContext


    // Custom Hooks

    