export default interface PaginatedResult<T> {
    data: T;
    count: number;
    page: number;
    limit: number;
}
