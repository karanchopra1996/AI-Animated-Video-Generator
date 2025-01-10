import { useState } from "react";
export default function Home() {
  const [video, setVideo] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const generateVideo = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/video-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const { video } = await response.json();
      setVideo(video);
    } catch (error) {
      console.error("Failed to generate video:", error);
    }
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">AI Animated Video Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your animation prompt"
        className="px-4 py-2 text-black border border-gray-300 rounded-lg mb-4 w-80 text-c
enter"
      />
      <button
        onClick={generateVideo}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? "Generating..." : "Generate Video"}
      </button>
      {isLoading && (
        <div className="mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></
          div>
        </div>
      )}
      {video && (
        <div className="mt-4">
          <video controls className="max-w-full">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}