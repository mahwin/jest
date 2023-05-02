import UserList from "./component/UserList";

function App() {
  return (
    <div className="App">
      <UserList user={["A", "C", "B"]} />
    </div>
  );
}

export default App;
