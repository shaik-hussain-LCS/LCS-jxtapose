// vite-plugin-fetch-files.ts
import fs from "fs";
import path from "path";
import { Plugin } from "vite";

interface FetchFilesOptions {
	folderPath: string;
}

export default function fetchFilesPlugin(options: FetchFilesOptions): Plugin {
	return {
		name: "fetch-files-plugin",
		resolveId(id) {
			if (id === "fetch-files") {
				return id;
			}
			return null;
		},
		load(id) {
			if (id === "fetch-files") {
				const folderContent = fs.readdirSync(options.folderPath);
				const fileNames = folderContent.filter((item) =>
					fs.statSync(path.join(options.folderPath, item)).isFile()
				);
				return `export default ${JSON.stringify(fileNames)};`;
			}
			return null;
		},
	};
}
