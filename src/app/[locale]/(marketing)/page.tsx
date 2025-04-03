import { setRequestLocale } from 'next-intl/server';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata() {
  return {
    title: 'Unprompted AI – The Debugging Engineer That Thinks for You',
    description:
      'Unprompted AI finds bugs, explains them, and gives you fixes—without any prompting. No pasting stack traces. No babysitting ChatGPT.',
  };
}

export default async function Index(props: IIndexProps) {
  await props.params; // Not using locale right now
  setRequestLocale('en'); // Hardcoded for now

  return (
    <main className="px-8 py-12 max-w-3xl mx-auto font-sans">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        The Debugging Engineer That Thinks for You
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        AI coding tools make you explain what went wrong. Unprompted AI sees your bug, traces the root cause, and gives you the fix—no prompting required.
      </p>
      <a
        href="#demo"
        className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-md hover:bg-gray-800"
      >
        Try the Live Debugger
      </a>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-12">
        Why Unprompted AI
      </h2>
      <ul className="text-gray-700 list-disc ml-6 space-y-3">
        <li>
          <strong>No prompting:</strong>
          <span>
            {' '}
            We detect the bug and explain it—so you don’t have to paste stack traces or describe the issue.
          </span>
        </li>
        <li>
          <strong>Root-cause tracing:</strong>
          <span>
            {' '}
            We find what actually broke, not just what line threw the error.
          </span>
        </li>
        <li>
          <strong>Context-aware suggestions:</strong>
          <span>
            {' '}
            Our LLM sees your repo, not just a snippet.
          </span>
        </li>
        <li>
          <strong>Unit test generation:</strong>
          <span>
            {' '}
            Stop regressions before they start.
          </span>
        </li>
        <li>
          <strong>Plug-and-play:</strong>
          <span>
            {' '}
            Works with your favorite IDE or browser.
          </span>
        </li>
      </ul>

      <h3 className="text-xl font-medium text-gray-900 mt-16 mb-4" id="demo">
        Stop prompting. Start debugging.
      </h3>
      <p className="text-gray-700 mb-6">
        Join our early access list and try Unprompted AI in your editor or browser today.
      </p>
      <a
        href="https://forms.gle/yourwaitlistlink"
        className="inline-block px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500"
      >
        Join the Waitlist
      </a>

      <p className="text-sm text-gray-400 mt-20">
        YC-backed. Built by developers who were tired of babysitting AI.
      </p>
    </main>
  );
}
