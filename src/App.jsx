import Form from "./components/Form";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";

function App() {

  const [tareas, setTareas] = useState({});
  const [tarea, setTarea] = useState({});

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
        tareas={tareas}
        setTareas={setTareas}
        tarea={tarea}
        setTarea={setTarea}
        />

        <ListaTareas />
        tareas={tareas}
        setTarea={setTarea}
        eliminarTarea={eliminarTarea}
      </div>
    </div>
  );
}

export default App;
