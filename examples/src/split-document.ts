import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { minify } from "terser";
import { minifyConfig } from "./utils/minify-js-config";

const data = `
function helloWorld() {
	console.log("Hello, World!");
}

// Call the function
helloWorld();
`;

const { code: minifiedData } = await minify(data, minifyConfig);

const splitter = RecursiveCharacterTextSplitter.fromLanguage("js", {
	chunkSize: 30,
	chunkOverlap: 0,
});

const chunks = await splitter.splitText(data);
console.log(chunks);

if (minifiedData) {
	const chunksFromMinifiedData = await splitter.splitText(minifiedData);
	console.log(chunksFromMinifiedData);
}
