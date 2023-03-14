module.exports = {
	tags: ["notes"],
	layout: "layouts/base.njk",
	eleventyComputed: {
		crumbs: (data) => [{ title: data.title, href: "{{ url }}" }],
	},
};
