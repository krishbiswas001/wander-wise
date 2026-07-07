export class notFoundError extends Error {
    constructor(message = 'Resource not found') {
        super(message);
        this.name = 'notFoundError';
        this.statusCode = 404;
    }
}