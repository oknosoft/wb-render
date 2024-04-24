
import {MetaEngine, utils} from './metadata-core.js';
import pluginPouchdb from './metadata-pouchdb.js';

document.title = 'enjine';

document.body.exec1 = () => {
	return "exec1";
};

const input = document.querySelector("#input");
const output = document.querySelector("#output");
input.onchange = () => {
	output.value = input.value;
};