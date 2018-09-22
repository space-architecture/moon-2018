const h = window.hyperapp.h;

export default state => h("div", {}, [
	header(),
	main(),
	footer()
]);

const header = () => (
	h("header", { class: "siteHeader" }, [
		h()
	])
);

const main = () => (
	h("main", {}, [])
);

const footer = () => (
	h("footer", { class: "siteFooter" }, [
		h("p", { innerHTML: "&copy 2018" })
	])
);