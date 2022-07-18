import MyNavbar from "./MyNavbar";

function MainContent() {
    return (
        <h1>Test</h1>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

function tick() {
    const element = (
        <div>
            <MyNavbar/>
            <MainContent/>

            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    root.render(
        element
    );
}

setInterval(tick, 1000);

