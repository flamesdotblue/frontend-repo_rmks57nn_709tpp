export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="text-xs text-neutral-500">Built with care — elegant, minimal, and responsive.</div>
      </div>
    </footer>
  );
}
