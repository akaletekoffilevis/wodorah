import DOMPurify from "isomorphic-dompurify";

// Prevent reverse tabnabbing on links opened in a new tab.
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
	if (node.nodeName === "A" && node.getAttribute("target") === "_blank") {
		node.setAttribute("rel", "noopener noreferrer");
	}
});

const ALLOWED_TAGS = [
	"p",
	"br",
	"strong",
	"em",
	"u",
	"s",
	"ul",
	"ol",
	"li",
	"a",
	"h2",
	"h3",
	"h4",
	"blockquote",
	"figure",
	"figcaption",
	"img",
	"table",
	"thead",
	"tbody",
	"tr",
	"th",
	"td",
];

const ALLOWED_ATTRIBUTES = [
	"href",
	"target",
	"rel",
	"class",
	"title",
	"src",
	"alt",
	"width",
	"height",
];

export function sanitizeHtml(html: string): string {
	return DOMPurify.sanitize(html, {
		ALLOWED_TAGS,
		ALLOWED_ATTR: ALLOWED_ATTRIBUTES,
	});
}
