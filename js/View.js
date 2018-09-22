const h = window.hyperapp.h;

const router = window.hyperappRouter;
const Link = router.Link;
const Route = router.Route;

export default ({ state }) => h("div", {}, [
	h(siteHeader, {}),

	h(Route, { path: "/", render: h(siteTop, { state: state }) }),
	h(Route, { path: "/:topicId", render: h(siteMain, { state: state }) }),

	h(siteFooter, {})
]);

const siteHeader = () => (
	h("header", { class: "siteHeader" }, [
		h("h1", {}, [
			h(Link, { to: "/", }, "宇宙建築 2018")
		])
	])
);

const siteTop = (state) => ({ location, match }) => (
	h("main", {}, "Top")
);

const siteMain = (state) => ({ location, match }) => (
	h("main", {}, [
		h("article", {}, [
			h("header", {}, []),
			h("section", { innerHTML: marked("## Title") }, []),
			h("footer", {}, [])
		])
	])
);

const siteFooter = () => (
	h("footer", { class: "siteFooter" }, [
		h("p", { innerHTML: "&copy 2018" })
	])
);
