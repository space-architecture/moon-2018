const h = window.hyperapp.h;

export default View = state => h("div", {}, [
	header(),
	main(),
	footer()
]);

const header = () => (
	h("header", {}, [])
);

const main = () => (
	h("main", {}, [])
);

const footer = () => (
	h("footer", {}, [])
);