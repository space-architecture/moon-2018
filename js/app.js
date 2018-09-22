const h = window.hyperapp.h;
const app = window.hyperapp.app;

window.onload = function () {
	application()
};

const application = () => {

	const state = {};

	const actions = {};

	const view = state => h("div", {}, [
		h("header", {}, []),
		h("main", {}, []),
		h("footer", {}, [])
	]);

	const main = app(state, actions, view, document.body);
};
