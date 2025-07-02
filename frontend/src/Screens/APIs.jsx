import { useEffect, useState } from "react";
import axios from "axios";

const APIs = () => {
  const [apiKeys, setApiKeys] = useState([]);

  const fetchApi = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3001/api/apikeys/getallapi", {
        headers: {
          Authorization: token,
        },
      });

      const keyString = res.data.data;
      setApiKeys(keyString);
      console.log("Fetched Keys:", keyString);
    } catch (error) {
      alert("Error while fetching API keys");
      console.log(error);
    }
  };

  const handleGenerateKey = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3001/api/apikeys/generate", {
        headers: {
          Authorization: token,
        },
      });

      console.log("New Key:", response.data.apiKey);
      await fetchApi(); // refresh the list after generating new key
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteKey = (keyToDelete) => {
    const updatedKeys = apiKeys.filter((k) => k.key !== keyToDelete);
    setApiKeys(updatedKeys);
  };

  const ApiKeysCard = ({ entry, onDelete }) => (
    <li className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded shadow-sm">
      <div className="flex flex-col">
        <span className="font-mono text-gray-700">{entry.key}</span>
        <span className="text-sm text-gray-500">TTL: {entry.expireAt}</span>
      </div>
      <button
        onClick={() => onDelete(entry.key)}
        className="text-red-600 hover:underline"
      >
        Delete
      </button>
    </li>
  );

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-base-200 shadow-gray-500 p-8 rounded-2xl shadow-lg space-y-10">
        <h1 className="text-3xl font-bold text-gray-100">📡 FotoVoid API Portal</h1>

        {/* Installation */}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-200">📦 Install Package</h2>
          <div className="bg-black text-green-400 font-mono px-4 py-2 rounded">
            npm i fotovoid
          </div>
        </section>

        {/* Usage */}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-200">📘 Usage</h2>
          <pre className="bg-black text-green-100 p-4 rounded overflow-auto text-sm">
{`import { getRandomImage } from 'fotovoid';

const apikey = 'your-api-key-here';

getRandomImage(apikey).then(url => {
  console.log('Image URL:', url);
});`}
          </pre>
        </section>

        {/* API Keys */}
        <section>
          <h2 className="text-xl font-semibold text-gray-100 mb-2">🔑 Your API Keys</h2>
          <button
            onClick={handleGenerateKey}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
          >
            Generate New Key
          </button>

          {apiKeys.length === 0 ? (
            <p className="text-gray-500 italic">No API keys generated yet.</p>
          ) : (
            <ul className="space-y-2">
              {apiKeys.map((entry, i) => (
                <ApiKeysCard key={i} entry={entry} onDelete={handleDeleteKey} />
              ))}
            </ul>
          )}
        </section>

        {/* API Endpoints */}
        <section>
          <h2 className="text-xl font-semibold text-gray-100 mb-2">📂 API Endpoints</h2>
          <div className="space-y-3">
            {apis.map((api, i) => (
              <div
                key={i}
                className="border-l-4 border-blue-600 bg-gray-50 p-3 rounded shadow-sm"
              >
                <p className="text-blue-700 font-bold">{api.method}</p>
                <p className="font-mono text-gray-800">{api.endpoint}</p>
                <p className="text-gray-600">{api.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const apis = [
  {
    method: "GET",
    endpoint: "/api/images/random",
    description: "Get a random image using an API key.",
  },
  {
    method: "POST",
    endpoint: "/api/images/upload",
    description: "Upload a new image to FotoVoid.",
  },
  {
    method: "DELETE",
    endpoint: "/api/images/:id",
    description: "Delete an image by ID.",
  },
  {
    method: "GET",
    endpoint: "/api/images",
    description: "Fetch all uploaded image URLs.",
  },
];

export default APIs;
