class ExpressError extends Error {
  statusCode: number = 500;
  constructor(message?: string, statusCode?: number) {
    super();
    if (message) {
      this.message = message;
    }
    if (statusCode) {
      this.statusCode = statusCode;
    }
  }
}

export default ExpressError;
