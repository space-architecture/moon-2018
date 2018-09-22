const h = window.hyperapp.h;

export default state => h("div", {}, [
	header(),
	main(),
	footer()
]);

const header = () => (
	h("header", { class: "siteHeader" }, [
		h("h1", {}, "宇宙建築 2018")
	])
);

const main = () => (
	h("main", { innerHTML: marked("## Title") }, [
		h("article", {}, [
			h("header", {}, []),
			h("section", {}, []),
			h("footer", {}, [])
		])
	])
);

const footer = () => (
	h("footer", { class: "siteFooter" }, [
		h("p", { innerHTML: "&copy 2018" })
	])
);
