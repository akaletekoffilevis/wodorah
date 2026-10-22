export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 120;

export const EMAIL_MAX_LENGTH = 190;

export const PHONE_PATTERN = /^[0-9 +().-]{6,30}$/;

export const SUBJECT_MAX_LENGTH = 255;

export const CONTACT_MESSAGE_MIN_LENGTH = 10;
export const CONTACT_MESSAGE_MAX_LENGTH = 5000;

export const APPLICATION_MESSAGE_MAX_LENGTH = 4000;

export const CV_MAX_BYTES = 4 * 1024 * 1024;

export const CV_MIME_TYPES = [
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	"application/vnd.oasis.opendocument.text",
] as const;
