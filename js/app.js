import View from './View.js';

const app = window.hyperapp.app;

const router = window.hyperappRouter;
const location = router.location;


window.onload = function () {
	application()
};

const application = () => {

	const state = {
		location: location.state
	};

	const actions = {
		location: location.actions
	};

	const view = h(View, { state: state });

	const main = app(state, actions, view, document.body);

	const unsubscribe = location.subscribe(main.location);	

};
