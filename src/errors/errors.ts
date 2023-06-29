export function notFoundError(element: string) {
    return {
        type: "NotFoundError",
        message: `${element ? element : "It"} was not found`
    }
}

export function unprocessableEntityError() {
    return {
        type: "UnprocessableEntityError",
        message: `Unprocessable Entity`
    }
}
