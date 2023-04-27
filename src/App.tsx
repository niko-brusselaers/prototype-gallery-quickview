import { useEffect, useState } from "react";
import "./App.css";
import { modalData } from "./interfaces/modalData";
import ImageModal from "./components/ImageModal";

function App() {
  const [data, setData] = useState<modalData[] | undefined>(undefined);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  });
  return (
    <div className="bodyContainer">
      {data?.map((data, index) => (
        <ImageModal data={data} key={index} />
      ))}
    </div>
  );
}

export default App;
