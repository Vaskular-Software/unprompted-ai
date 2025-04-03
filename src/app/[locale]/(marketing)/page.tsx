'use client';

import Image from 'next/image';
import '@fontsource/inter/variable.css';

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen font-sans">
      <div className="max-w-screen-xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Hero Copy */}
        <div>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold bg-gray-900 rounded-full border border-gray-700">
            Introducing Unprompted AI
          </span>
          <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6">
            <span>The</span>
            <br />
            <span className="text-teal-400">Debugging AI</span>
            <br />
            <span>platform for developers</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Unprompted AI automatically detects, explains, and fixes bugs in your codebase. No stack traces. No prompting. Just answers.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="px-6 py-3 bg-white text-black font-semibold rounded-md shadow hover:bg-gray-200 transition"
            >
              Try For Free
            </button>
            <button
              type="button"
              className="px-6 py-3 border border-gray-700 text-white rounded-md hover:bg-gray-800 transition"
            >
              View Pricing
            </button>
          </div>
        </div>

        {/* Right: Code Snippet */}
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800">
          <div className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
{`// unprompted-ai example
const bug = stackTrace()
const explanation = await debug(bug)
const fix = await suggestFix(bug, explanation)
apply(fix)`}
          </div>
        </div>
      </div>

      {/* Logos */}
      <section className="border-t border-gray-800 py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <h3 className="text-center text-gray-400 text-sm mb-6">
            Trusted by forward-thinking devs and early YC reviewers
          </h3>
          <div className="flex justify-center gap-10 opacity-60">
            <Image src="/logo1.svg" alt="logo1" width={100} height={24} />
            <Image src="/logo2.svg" alt="logo2" width={100} height={24} />
            <Image src="/logo3.svg" alt="logo3" width={100} height={24} />
            <Image src="/logo4.svg" alt="logo4" width={100} height={24} />
          </div>
        </div>
      </section>

      {/* Playground */}
      <section className="border-t border-gray-800 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Try the Unprompted Debugger</h2>
          <p className="text-gray-400 mb-10">
            Paste your broken code and see how our AI detects and explains bugs without a single prompt.
          </p>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
            <textarea
              placeholder="Paste your buggy code here..."
              className="w-full h-40 bg-black text-green-400 font-mono p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="button"
              className="mt-6 px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400"
            >
              Analyze Code
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
