import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

toast.configure();
function App() {
  const notify = () => {
    toast("basic notification", { position: toast.POSITION.TOP_LEFT });
    toast.success(<CustomToast />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
    toast.info("basic notification", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });

    toast.warn("basic notification", { position: toast.POSITION.BOTTOM_LEFT });
    toast.error("basic notification", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast("basic notification", { position: toast.POSITION.BOTTOM_RIGHT });
  };
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
