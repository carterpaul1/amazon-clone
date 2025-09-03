export default function SignInBanner() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Sign in for the best experience</h2>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded shadow">
          Sign in securely
        </button>
        <p className="text-sm text-gray-600 mt-4">
          New to Amazon? <span className="text-blue-500 cursor-pointer hover:underline">Start here</span>
        </p>
      </div>
    </section>
  );
}