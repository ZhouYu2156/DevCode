const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' },
]
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>{"列表渲染"}</h1>
      <ul>
        {
          list.map((item) => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
