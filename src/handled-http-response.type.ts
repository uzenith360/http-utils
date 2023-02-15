type HandledHttpResponse<T> = {
    statusCode: number;
    message: string;
    data?: T;
}

export default HandledHttpResponse;
