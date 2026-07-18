export interface StatusResponse {
  status: string;
}

export interface CreatedResponse {
  id: number;
  guid: string;
}

export interface ErrorResponse {
  code: number;
  message: string;
}

export function isErrorResponse(value: unknown): value is ErrorResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "code" in value &&
    "message" in value &&
    typeof (value as ErrorResponse).code === "number" &&
    typeof (value as ErrorResponse).message === "string"
  );
}

export interface PermissionDeniedResponse {
  code: number;
  message: string;
}

export function isPermissionDeniedResponse(value: unknown): value is PermissionDeniedResponse {
  return isErrorResponse(value);
}

