import { describe, expect, it } from "vitest";
import { isAcceptedCvFile } from "./application";
import { CV_MAX_BYTES } from "./constraints";

const acceptedType = "application/pdf";

describe("isAcceptedCvFile", () => {
	it("accepts a non-empty document within the size limit", () => {
		expect(isAcceptedCvFile({ type: acceptedType, size: 1024 })).toBe(true);
		expect(isAcceptedCvFile({ type: acceptedType, size: CV_MAX_BYTES })).toBe(true);
	});

	it("rejects an empty or oversized document", () => {
		expect(isAcceptedCvFile({ type: acceptedType, size: 0 })).toBe(false);
		expect(isAcceptedCvFile({ type: acceptedType, size: CV_MAX_BYTES + 1 })).toBe(false);
	});

	it("rejects a MIME type that is not a document", () => {
		expect(isAcceptedCvFile({ type: "image/png", size: 1024 })).toBe(false);
	});
});
