export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">ImaginAItion Test Page</h1>
        <p className="text-xl">If you can see this, the server is working!</p>
        <p className="text-lg mt-4 text-blue-400">
          Time: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}