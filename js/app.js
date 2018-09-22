import View from './js/View.js';

const app = window.hyperapp.app;

window.onload = function () {
	application()
};

const application = () => {

	const state = {};

	const actions = {};

	const view = View;

	const main = app(state, actions, view, document.body);
};
