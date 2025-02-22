export default function Text() {
  return (
    <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">
                Characterstics
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Strong Password ?
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                A strong password is created using a combination of the
                following principles:
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="https://imgs.search.brave.com/1haVxbO9iH0glVe2e2XdbPkr5xQiVBoQr0Wg_-QZmLM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1wYXNzd29y/ZC1wcm90ZWN0aW9u/LXdpdGgtbG9jay1r/ZXktbGFwdG9wXzk4/OTgyMi02MzY1Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                1. Length Matters - Use at least 12-16 characters (longer is
                better).
              </p>
              <p className="mt-2">
                2. Use a Mix of Characters Include a combination of:
                <li>✅Uppercase letters(A-Z)</li>
                <li>✅ Lowercase letters (a-z)</li>
                <li>✅ Numbers (0-9)</li>
                <li>✅ Special symbols (!, @, #, $, etc.).</li>
              </p>
              <p className="mt-2 text-md">
                3. Avoid Common & Predictable Words:
                <li>❌ No "password," "123456," "qwerty," or "admin."</li>
                <li>❌ Avoid personal info (name, birthday,pet’s name).</li>
                <li>
                  ❌ Don’t use keyboard patterns (e.g., "asdfgh," "zxcvbn").
                </li>
              </p>
              <p>
                4. Unique for Each Account Never reuse passwords across different
                sites.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
