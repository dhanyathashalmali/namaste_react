const heading = React.createElement
    ("h1",
        { id: "heading" },
        "Hello world from react")
const parent = React.createElement
    (
        "h1",
        { id: "parent" },
        [React.createElement("div", { id: "child1" }, [
            React.createElement("h1", { id: "h1" }, "im an h1 tag"),
            React.createElement("h1", { id: "h1" }, "I am an h2 tag")
        ]),
        React.createElement("h1", { id: "child2" }, [
            React.createElement("h1", { id: "h1" }, "im an h1 tag"),
            React.createElement("h1", { id: "h1" }, "I am an h2 tag")
        ])]
    )
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

