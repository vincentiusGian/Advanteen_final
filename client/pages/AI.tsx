import React, { useState } from "react";

function AI() {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await res.json();
      setOutput(data);
    } catch (error) {
      console.error("Error:", error);
      setOutput({ error: "Failed" });
    } finally {
      setLoading(false);
    }
  };

  const getRecommendation = (label) => {
    switch (label) {
      case 0:
        return "STEM Projects";
      case 1:
        return "Social Economy Projects";
      case 2:
        return "Arts Projects";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 pt-32 pb-16 font-sans">
      <h1 className="text-2xl font-bold mb-4">
        Social Project Theme Recommendation
      </h1>
      <h4 className="text-sm mb-4 text-gray-600">
        Write a short paragraph (max. 150 words) about your major, your hobbies, and your personalities.
      </h4>

      <textarea
        rows={5}
        className="w-full border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Write your short essay here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Submit"}
      </button>

      {output && (
        <div className="mt-6">
          {output.error ? (
            <p className="text-red-600 font-medium">{output.error}</p>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">Recommendation:</h2>
              <p className="mb-4 text-lg font-medium text-green-700">
                {getRecommendation(output.prediction)}
              </p>
              <p className="mb-1 font-semibold">Probabilities:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                {output.probabilities.map((p, i) => (
                  <li key={i}>
                    Label {i}: {(p * 100).toFixed(2)}%
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default AI;
