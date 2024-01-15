declare module 'oxcyn/response' {
  enum ErrorCode {
    // 40x
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 402,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,

    // 50x
    SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    GATEWAY_TIMEOUT = 503,
  }

  enum SuccessCode {
    // 20x
    SUCCESS = 200,
    CREATED = 201,
    NO_CONTENT = 204,
  }

  type SuccessResponseData<DocumentData, SnapshotMetadata> = {
    kind: `oxcyn#${string}`
    code: SuccessCode
    data: DocumentData
    metadata: SnapshotMetadata
  }

  type ErrorResponse = {
    code: ErrorCode
    message: string | undefined
    errors: string[]
  }
}
