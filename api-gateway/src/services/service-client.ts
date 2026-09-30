import { GatewayError } from "../errors/gateway.error";

export const serviceRequest = async(
    url: string,
    options: RequestInit = {}
): Promise<unknown> => {
    let response: Response;

    try {
        response = await fetch(url, {
            ...options,
            signal: AbortSignal.timeout(500)
        })
    } catch(error: unknown) {
        if(error instanceof Error && error.name === "TimeoutError") {
            throw new GatewayError(
                504, 
                "GATEWAY_TIMEOUT", 
                "The request took too long to respond"
            )
        }

        throw new GatewayError(
            504, 
            "SERVICE_UNAVAILABLE", 
            "The requested service is temporary unavailable."
        )
    }

    if(!response.ok) {
        if(response.status >= 500) {
            throw new GatewayError(
                502, 
                "UPSTREAM_REQUEST_FAILED", 
                "The requested operation could not be complete."
            )
        }

        throw new GatewayError(
            response.status, 
            "INVALID_SERVICE_RESPONSE", 
            "The requested service returned an invalid response"
        )
    }

    try {
        return response.json()
    } catch {
        throw new GatewayError(
            502, 
            "INVALID_SERVICE_RESPONSE", 
            "The requested service returned an invalid response"
        )
    }

}