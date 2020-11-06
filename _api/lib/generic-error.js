class GenericError extends Error {
  constructor({ code, message, field }) {
    super(message);

    this.code = code;
    this.field = field;
  }
}

export default GenericError;
