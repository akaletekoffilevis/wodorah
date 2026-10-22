import { describe, expect, it } from "vitest";
import { sanitizeHtml } from "./html";

describe("sanitizeHtml", () => {
	it("removes scripts and event handlers", () => {
		const dirty = '<p onclick="steal()">Texte</p><script>alert(1)</script>';

		expect(sanitizeHtml(dirty)).toBe("<p>Texte</p>");
	});

	it("keeps allowed editorial markup", () => {
		const content = "<h2>Titre</h2><p><strong>Important</strong></p><ul><li>Point</li></ul>";

		expect(sanitizeHtml(content)).toBe(content);
	});

	it("keeps links and images", () => {
		const content = '<p><a href="/contact">Contact</a><img src="/logo.png" alt="Wodorah" /></p>';
		const sanitized = sanitizeHtml(content);

		expect(sanitized).toContain('<a href="/contact">Contact</a>');
		expect(sanitized).toContain('src="/logo.png"');
		expect(sanitized).toContain('alt="Wodorah"');
	});

	it("hardens links opened in a new tab", () => {
		const sanitized = sanitizeHtml(
			'<a href="https://example.com" target="_blank">Lien externe</a>',
		);

		expect(sanitized).toContain('rel="noopener noreferrer"');
	});
});
