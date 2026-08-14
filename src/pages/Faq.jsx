function Faq() {
  return (
    <div className="text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <section className="text-center py-20 px-5">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400">
          Got questions? We've got answers.
        </p>
      </section>

      <section className="pb-20 px-5 max-w-3xl mx-auto space-y-6">
        <div className="backdrop-blur-md bg-white/70 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
            How long does delivery take?
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            Most orders arrive within 3–5 business days, depending on your location.
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/70 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
            What payment methods do you accept?
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            We accept major credit/debit cards and popular local payment methods.
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/70 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
            Can I return a product?
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            Yes, returns are accepted within 14 days of delivery, provided the item is unused.
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/70 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
            How can I track my order?
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            Once shipped, you'll receive a tracking link via email to monitor your delivery.
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/70 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
            Do you offer customer support?
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            Yes, our support team is available to help with any questions or issues.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Faq;