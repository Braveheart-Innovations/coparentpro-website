import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Open Source Licenses",
  description:
    "Open source software licenses used in the CoParentPro application.",
};

const LICENSES = [
  {
    name: "React Native",
    license: "MIT",
    url: "https://github.com/facebook/react-native",
    copyright: "Meta Platforms, Inc. and affiliates",
  },
  {
    name: "Expo",
    license: "MIT",
    url: "https://github.com/expo/expo",
    copyright: "650 Industries, Inc.",
  },
  {
    name: "Firebase",
    license: "Apache 2.0",
    url: "https://github.com/firebase/firebase-js-sdk",
    copyright: "Google LLC",
  },
  {
    name: "React Navigation",
    license: "MIT",
    url: "https://github.com/react-navigation/react-navigation",
    copyright: "React Navigation contributors",
  },
  {
    name: "React Native Paper",
    license: "MIT",
    url: "https://github.com/callstack/react-native-paper",
    copyright: "Callstack",
  },
  {
    name: "ONNX Runtime",
    license: "MIT",
    url: "https://github.com/microsoft/onnxruntime",
    copyright: "Microsoft Corporation",
  },
  {
    name: "React Query (TanStack Query)",
    license: "MIT",
    url: "https://github.com/TanStack/query",
    copyright: "Tanner Linsley",
  },
  {
    name: "date-fns",
    license: "MIT",
    url: "https://github.com/date-fns/date-fns",
    copyright: "Sasha Koss",
  },
  {
    name: "React Native Gesture Handler",
    license: "MIT",
    url: "https://github.com/software-mansion/react-native-gesture-handler",
    copyright: "Software Mansion",
  },
  {
    name: "React Native Reanimated",
    license: "MIT",
    url: "https://github.com/software-mansion/react-native-reanimated",
    copyright: "Software Mansion",
  },
  {
    name: "RevenueCat",
    license: "MIT",
    url: "https://github.com/RevenueCat/react-native-purchases",
    copyright: "RevenueCat, Inc.",
  },
  {
    name: "Next.js",
    license: "MIT",
    url: "https://github.com/vercel/next.js",
    copyright: "Vercel, Inc.",
  },
  {
    name: "Tailwind CSS",
    license: "MIT",
    url: "https://github.com/tailwindlabs/tailwindcss",
    copyright: "Tailwind Labs, Inc.",
  },
];

export default function LicensesPage() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Open Source Licenses
          </h1>
          <p className="text-neutral-700 leading-relaxed mb-10">
            CoParentPro is built with the help of many excellent open source
            projects. We are grateful to the developers and communities behind
            these tools. Below is a list of the major open source software used
            in our application.
          </p>

          <div className="space-y-4">
            {LICENSES.map((lib) => (
              <div
                key={lib.name}
                className="flex items-start justify-between gap-4 py-4 border-b border-neutral-100 last:border-0"
              >
                <div>
                  <h2 className="font-semibold text-neutral-900">
                    <a
                      href={lib.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {lib.name}
                    </a>
                  </h2>
                  <p className="text-sm text-neutral-500 mt-0.5">
                    {lib.copyright}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 flex-shrink-0">
                  {lib.license}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-neutral-100 rounded-xl">
            <h2 className="font-semibold text-neutral-900 mb-2">
              Full License Texts
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed">
              The full license texts for all open source dependencies are
              included in the application source code. If you would like a copy
              of any license, please contact us at{" "}
              <a
                href="mailto:legal@braveheartinnovations.com"
                className="text-primary hover:text-primary-dark underline"
              >
                legal@braveheartinnovations.com
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
