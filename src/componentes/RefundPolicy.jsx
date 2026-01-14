
const RefundPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">ফেরত/Refund Policy</h1>
        <p className="mt-2 text-sm sm:text-base text-zinc-600">
          নীতিগুলি পড়ুন — আমাদের ডিজিটাল পণ্যের ক্ষেত্রে কিছু নির্দিষ্ট শর্ত প্রযোজ্য। / Please read the policy — certain
          terms apply to our digital products.
        </p>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bengali column */}
        <section
          aria-labelledby="bn-policy"
          lang="bn"
          className="bg-base-200/80 dark:bg-zinc-900/60 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800"
        >
          <h2 id="bn-policy" className="text-xl font-semibold mb-3">
            ফেরত/ফেরত নীতি (বাংলা)
          </h2>

          <article className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              আমাদের কাছ থেকে পণ্য কেনার জন্য ধন্যবাদ। আমরা চাই আপনি আমাদের সাথে একটি ভালো অভিজ্ঞতা পান। এই নীতিমালা
              একটি সারসংক্ষেপ — পণ্য কেনার মাধ্যমে আপনি আমাদের ব্যবহার শর্তাবলী, গোপনীয়তা নীতি এবং নিচের শর্তাবলীতে
              রাজী হচ্ছেন।
            </p>

            <h3>বাতিলকরণ ও ফেরত</h3>
            <p>
              ডিজিটাল পণ্যের ক্ষেত্রে তাত্ক্ষণিক অ্যাক্সেস থাকা প্রেমে, সাধারণত সব বিক্রয় চূড়ান্ত এবং ফেরতযোগ্য নয়। তবে
              নির্দিষ্ট ব্যতিক্রম বিবেচিত হবে (নীচে দেখুন)।
            </p>

            <h4>নির্দিষ্ট পণ্যের শর্ত</h4>
            <p>
              যদি কোন ডিজিটাল পণ্য “সন্তুষ্টি গ্যারান্টি” তে থাকে, ফেরত পেতে হলে অর্ডার সক্রিয় হওয়ার <strong>৬ ঘন্টার</strong>
              মধ্যে আবেদন করতে হবে এবং অসন্তুষ্টির যুক্তিসমর্থন প্রদান করতে হবে।
            </p>

            <h4>পণ্য বর্ণিত নয়</h4>
            <p>
              পণ্যের বর্ণনার সাথে মিল না থাকলে ক্রয় থেকে <strong>৭ দিনের</strong> মধ্যে রিপোর্ট করুন এবং প্রমাণ সংযুক্ত
              করুন। ব্যক্তিগত পদচ্যুতি বা ভুল প্রত্যাশার ভিত্তিতে দাবি গ্রহণযোগ্য হবে না।
            </p>

            <h4>দ্বৈত অর্থপ্রদান</h4>
            <p>
              যাচাই সাপেক্ষে দ্বৈত অর্থপ্রদান মূল পেমেন্ট পদ্ধতিতে বা আমাদের নির্ধারিত অন্য পদ্ধতিতে ফেরত দেওয়া হবে।
              প্রক্রিয়া সম্পন্ন হতে সর্বোচ্চ <strong>৭ কর্মদিবস</strong> সময় লাগতে পারে।
            </p>

            <p>
              ফেরতের অনুরোধ পাঠান:{" "}
              <a
                href="mailto:eproshnobank.official@gmail.com"
                className="inline-block underline font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded"
              >
                eproshnobank.official@gmail.com
              </a>
              । অনুরোধটি অবশ্যই বিস্তারিত এবং যুক্তিসহ প্রদান করতে হবে।
            </p>

            <h4>পেমেন্ট গেটওয়ে ফেরত</h4>
            <p>
              আমাদের ভাইস প্রক্রিয়া অনুমোদনের পর পেমেন্ট গেটওয়ে প্রসেসরের কাছে প্রেরণ করা হবে; প্রক্রিয়াটি সম্পন্ন হতে
              প্রায় <strong>১০ ব্যবসায়িক দিন</strong> লাগতে পারে; ব্যাঙ্ক/গেটওয়ের বিলম্বের জন্য আমরা দায়বদ্ধ হবো না।
            </p>
          </article>
        </section>

        {/* English column */}
        <section
          aria-labelledby="en-policy"
          lang="en"
          className="bg-base-200/80 dark:bg-zinc-900/60 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800"
        >
          <h2 id="en-policy" className="text-xl font-semibold mb-3">
            Refund / Return Policy (English)
          </h2>

          <article className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              Thank you for purchasing from us. We want every customer to have a great experience. By purchasing you agree
              to our Terms of Use and Privacy Policy and accept the conditions described below.
            </p>

            <h3>Cancellation &amp; Refunds</h3>
            <p>
              Due to immediate access to digital products, most sales are final and non-refundable. Exceptions are handled
              as described.
            </p>

            <h4>Specific Digital Product Terms</h4>
            <p>
              Products offered under a “Satisfaction Guarantee” may qualify for a full or partial refund only if a refund
              request is submitted within <strong>6 hours</strong> of order activation with valid justification.
            </p>

            <h4>Product Not as Described</h4>
            <p>
              Report discrepancies within <strong>7 days</strong> of purchase and include evidence that the product does not
              match the website description. Claims based on false expectations or personal preferences will not be honored.
            </p>

            <h4>Duplicate Payment</h4>
            <p>
              Verified duplicate payments will be refunded to the original payment method or another method we determine
              appropriate. Refund processing may take up to <strong>7 business days</strong>.
            </p>

            <p>
              Submit refund requests to:{" "}
              <a
                href="mailto:eproshnobank.official@gmail.com"
                className="inline-block underline font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded"
              >
                eproshnobank.official@gmail.com
              </a>
              . Provide detailed reasons and supporting evidence. Requests that conflict with our Terms or Privacy Policy
              will be rejected.
            </p>

            <h4>Refunds via Payment Gateway</h4>
            <p>
              Once we approve a refund, we will forward the request to the payment gateway provider within a maximum of{" "}
              <strong>10 business days</strong>. Any delay in crediting the refund is between the gateway/bank and the user.
            </p>
          </article>
        </section>
      </main>

      <footer className="mt-8 text-center text-sm text-zinc-500">
        <p>
          Need a compact or printable version? Or prefer a single-column layout on large screens — I can provide variants.
        </p>
      </footer>
    </div>
  );
};

export default RefundPolicy;
