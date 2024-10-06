const parent = React.createElement("div", { id: "paremt" }, 
    React.createElement("div", { id: "child1" }, 
    [React.createElement("h1", { id: "childh1" }, "H1 inside div inside div"),React.createElement("h1", { id: "childh1" }, "H1 inside div inside div")]))

const heading = React.createElement("h1", { id: "heading" }, "Hello world from React inside it");

const root = ReactDOM.createRoot(document.getElementById("root"));

const hero = React.createElement("div", { id: "hdiv" }, "this is division");



root.render(heading);
console.log(heading);
root.render(parent);
