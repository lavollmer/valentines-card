import "./App.css";
import "./index.css";
import "./components/ValentinesCard";
import ValentinesCard from "./components/ValentinesCard";

function App() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Message: ${message} | Name: ${name}`);
  }

  return (
    <>
      <div className="bg-mauvePink h-screen flex justify-center items-center">
        <form>
          <textarea
          value={name}
          placeholder="Please enter your name"
          onChange={(e) => setName(e.target.value)}
          />
          <textarea
            value={message}
            placeholder="Please enter a message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default App;
