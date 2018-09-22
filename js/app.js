const h = window.hyperapp.h;
const app = window.hyperapp.app;

window.onload = function () {
	application()
};

const application = () => {

	const state = {};

	const actions = {};

	const view = state => h("p", {}, "テスト");

	const main = app(state, actions, view, document.body);
};
