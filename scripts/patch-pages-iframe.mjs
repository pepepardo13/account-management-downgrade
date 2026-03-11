import { readdir, readFile, writeFile } from "node:fs/promises";

const iframePath = new URL("../docs/iframe.html", import.meta.url);
const assetsPath = new URL("../docs/assets/", import.meta.url);
const repoBasePath = "/account-management-prototypes";
const wrongPath = 'src="/vite-inject-mocker-entry.js"';
const correctPath = `src="${repoBasePath}/vite-inject-mocker-entry.js"`;

const iframeHtml = await readFile(iframePath, "utf8");

if (iframeHtml.includes(wrongPath)) {
  await writeFile(iframePath, iframeHtml.replace(wrongPath, correctPath));
}

const assetEntries = await readdir(assetsPath);
const preloadHelperFile = assetEntries.find((entry) =>
  entry.startsWith("preload-helper-") && entry.endsWith(".js"),
);

if (preloadHelperFile) {
  const preloadHelperPath = new URL(preloadHelperFile, assetsPath);
  const preloadHelperSource = await readFile(preloadHelperPath, "utf8");
  const cssErrorHandlers = [
    {
      from: 'n.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${e}`)))',
      to: 'n.addEventListener("error",()=>f())',
    },
    {
      from: 'n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))',
      to: 'n.addEventListener("error",()=>c())',
    },
  ];

  let patchedPreloadHelperSource = preloadHelperSource;

  for (const cssErrorHandler of cssErrorHandlers) {
    if (patchedPreloadHelperSource.includes(cssErrorHandler.from)) {
      patchedPreloadHelperSource = patchedPreloadHelperSource.replace(
        cssErrorHandler.from,
        cssErrorHandler.to,
      );
    }
  }

  if (patchedPreloadHelperSource !== preloadHelperSource) {
    await writeFile(preloadHelperPath, patchedPreloadHelperSource);
  }
}
